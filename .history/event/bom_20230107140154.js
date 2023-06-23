//Browser Object Modal: alert, prompt, window, confirm
// Location
console.log(location);
console.log(window.location);

let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
console.log(params.set("page",10));
console.log(params.get("page"));
console.log(params.keys());
