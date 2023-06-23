const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e){
    console.log(e.target);
    const img = e.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
    <img
        src="${img}"
        alt=""
        class="lightbox-image"
    />
    <i class="fa fa-angle-right lightbox-next"></i>
    </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);

}
document.body.addEventListener("click", function(e){
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    }
});