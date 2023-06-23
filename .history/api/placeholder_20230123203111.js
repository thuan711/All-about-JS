// async function addPost(title, author){
//     const response = await fetch('http://localhost:3000/posts', {
//     method: "POST",
//     body: JSON.stringify({
        
//         title,
//         author,
        
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//     console.log(response);
//     return response;
// }
// const formPost = document.querySelector(".form-post");
// formPost.addEventListener("submit", function(e){
//     e.preventDefault();
//     const title = this.elements["title"].value;
//     const author = this.elements["author"].value;
//     addPost(title, author);
// })
// const course = {
//     image: "",
//     title: "",
//     author: "",
//     rating: "",
//     price: "",
//     bestSeller: "",
//     buyAmount: "",
// }
const endPoint = "http://localhost:3000/posts";
const formPost = document.querySelector(".form-post");
const courseList = document.querySelector(".course-list");
const formSubmit = document.querySelector(".form-submit");
const filterInput = document.querySelector(".filter");
let updateId = null;
async function addNewCourse({
    image,
    title,
    author,
    rating,
    price,
    bestSeller,
    buyAmount,
}) {
    await fetch(endPoint, {
        method: "POST",
        body: JSON.stringify({
            image,
            title,
            author,
            rating,
            price,
            bestSeller,
            buyAmount,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}
async function updateCourse({
    id,
    image,
    title,
    author,
    rating,
    price,
    bestSeller,
    buyAmount,
}) {
    await fetch(`${endPoint}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            image,
            title,
            author,
            rating,
            price,
            bestSeller,
            buyAmount,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

async function deleteCourse(id) {
    await fetch(`${endPoint}/${id}`,{
        method: "DELETE",    
    })
}

async function getSingleCourse(id) {
    const response = await fetch(`${endPoint}/${id}`)
    const data = await response.json();
    return data;
}

function renderItem(item) {
    const template = `<div class="course-item">
    <div class="course-image">
        <img src="${item.image}" alt="" />
        <button class="course-edit" data-id="${item.id}"><i class="fa fa-pencil" style="pointer-events: none;"></i></button>
        <button class="course-remove" data-id="${item.id}"><i class="fa fa-times"></i></button>
    </div>
    <div class="course-content">
        <h3 class="course-title">
            ${item.title}
        </h3>
        <div class="course-author">${item.author}</div>
        <div class="course-meta">
        <div class="course-rating">${item.rating}</div>
        <div class="course-enroll">${item.buyAmount}</div>
        </div>
        ${
        item.bestSeller ? '<div class="course-best-seller">Best seller</div>' : ""
        }
    </div>`;
    courseList.insertAdjacentHTML("beforeend", template);
}
 
async function getCourses(){
    const response = await fetch(endPoint);
    const data = await response.json();
    if(data.length>0 && Array.isArray(data)){
        data.forEach((item) =>  renderItem(item)); 
        
    }
}  

formPost.addEventListener("submit",async function(e){
    e.preventDefault();
    const course = {
        title: this.elements["title"].value,
        author: this.elements["author"].value,
        rating: +this.elements["rating"].value,
        price: +this.elements["price"].value,
        bestSeller: this.elements["bestSeller"].checked,
        image: this.elements["image"].value,
        buyAmount: +this.elements["buyAmount"].value,
    }
    updateId ? await updateCourse({id,...course}) : await addNewCourse(course);
    this.reset();
    await getCourses();
});
courseList.addEventListener("click", async function(e){
    if(e.target.matches(".course-remove")){
        const id = +e.target.dataset.id;
        await deleteCourse(id)
        await getCourses();
    } else if(e.target.matches(".course-edit")){
        const id = +e.target.dataset.id;
        const data = await getSingleCourse(id)
        formPost.elements["image"].value = data.image;
        formPost.elements["title"].value = data.title;
        formPost.elements["author"].value = data.author;
        formPost.elements["rating"].value = data.rating;
        formPost.elements["bestSeller"].checked = data.bestSeller;
        formPost.elements["price"].value = data.price;
        formPost.elements["buyAmount"].value = data.buyAmount;
        updateId = id;
    }
})

getCourses();