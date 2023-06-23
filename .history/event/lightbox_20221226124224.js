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
    let lightsrc = "";
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    } else if(e.target.matches(".lightbox-next")){
        lightsrc = lightImage.getAttribute("src");
        index = [... images].findIndex(
            (item) => item.getAttribute("src") === lightsrc
        );
        index = index +1;
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src",newSrc);
    }
});