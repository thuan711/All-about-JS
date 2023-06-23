const endpoint = "https://api.github.com/users/evondev"
const promise = fetch(endpoint)
promise
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        console.log(data.bio);
        console.log(data.login);
    })
    .catch((err)=>{
        console.log(err);
    });