function addPost({title, author}){
    fetch('http://localhost:3000/posts', {
    method: 'PUT',
    body: JSON.stringify({
        
        title: 'foo',
        author: 'bar',
        
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}