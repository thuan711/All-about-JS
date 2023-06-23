window.addEventListener("load", function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelectorAll(".slider-item");
    const sliderPrev = document.querySelector(".slider-prev");
    const sliderNext = document.querySelector(".slider-next");
    const dotItem = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const sliderLength = sliderItem.length;
    let postionX = 0;
    let index = 0;
    sliderPrev.addEventListener("click", function(){
        handleChangeSlide(1);
    });
    sliderNext.addEventListener("click", function(){
        handleChangeSlide(-1);
    });
    function handleChangeSlide(direction){
        if (direction === 1) {
            if (index >= sliderLength - 1) {
              index = sliderLength - 1;
              return;
            }
            postionX = postionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index++;
          } else if (direction === -1) {
            if (index <= 0) {
              index = 0;
              return;
            }
            postionX = postionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index--;
        }
    }
});
