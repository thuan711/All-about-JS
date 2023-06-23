const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e){
    console.log(e.target);
    const img = e.target.getAttribute("src");
    const template = `
    <div class="lightbox-content">
    <img
        src="${img}"
        alt=""
        class="lightbox-image"
    />
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);

}
document.body.addEventListener("click", function(e){
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    }
});