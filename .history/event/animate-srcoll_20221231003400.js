document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll(".container img");
    window.addEventListener("croll", function(){
        const windowScrollTop = window.pageYOffset;
        [...images].forEach((item) => {
            if(windowScrollTop > item.offsetTop - item.offsetHeight/2){
                item.classList.add("active");
            }
        });
    })
});