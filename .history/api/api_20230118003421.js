// API application progaming interface
const endpoint = "https://api.github.com/users/evondev"
// const promise = fetch(endpoint)
// promise
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data.bio);
//         console.log(data.login);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
const userEl = document.querySelector(".username");
async function displayUser(username){
    userEl.textContent = "Loading...";
    const promise = await fetch(`${endpoint}/${username}`)
    const data = await promise.json();
    userEl.textContent = `${data.login}`
}
function handleError() {
    console.log("Đôi khi mày sai");
    userEl.textContent = "No data found";
}
displayUser("jsonn").catch(handleError);