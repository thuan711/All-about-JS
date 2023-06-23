// selector: 1 cái
const link = document.querySelector(".link");
// getAttribute -> thuộc tính: href, id, style
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) => {
    console.log(item.getAttribute("class"));
});
console.log(li);

link.setAttribute("target","_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target","_blank"));

p = document.getElementById("spinner");
p.removeAttribute("style");
