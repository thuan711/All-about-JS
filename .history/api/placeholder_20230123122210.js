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
const courseList = document.querySelector(".course-list");
const formSubmit = document.querySelector(".form-submit");
const filterInput = document.querySelector(".filter");
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
function renderItem(item) {
    const template = `<div class="course-item">
    <div class="course-image">
        <img src="${item.image}" alt="" />
        
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
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit",async function(e){
    e.preventDefault();
    const course = {
        title: this.elements["title"].value,
        author: this.elements["author"].value,
        rating: this.elements["rating"].value,
        price: this.elements["price"].value,
        bestSeller: this.elements["bestSeller"].checked,
        image: this.elements["image"].value,
        buyAmount: this.elements["buyAmount"].value,
    }
    await addNewCourse(course);
    this.reset();
    await getCourses();
});
courseList.addEventListener("click", function(e){
    if(e.target.matches(".course-remove")){
        console.log("e.target");
    }
})
getCourses();