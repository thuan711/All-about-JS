async function addPost(title, author){
    const response = await fetch('http://localhost:3000/posts', {
    method: 'PUT',
    body: JSON.stringify({
        
        title,
        author,
        
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.log(response);
    return response;
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function(e){
    e.preventDefault();
    const title = this.elements["title"].value;
    const author = this.elements["author"].value;
    addPost(title, author);
})