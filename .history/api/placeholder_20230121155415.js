function addPost(){
    fetch('https://localhost:3000/posts', {
    method: 'PUT',
    body: JSON.stringify({
        
        title: 'foo',
        body: 'bar',
        
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}