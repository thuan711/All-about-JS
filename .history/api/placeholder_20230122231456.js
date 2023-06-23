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
async function addPost({
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
    this.reset;
})