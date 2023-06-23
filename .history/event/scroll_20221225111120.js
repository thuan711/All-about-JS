window.addEventListener("load",function (){
    const tabItems = document.querySelectorAll(".tab-item");
    const tabList = document.querySelector(".tab-list");
    const tab = document.querySelector(".tab");
    const tabOffsetLeft = tab.offsetLeft;
    const tabNext = document.querySelector(".tab-next");
    const tabPrev = document.querySelector(".tab-prev");
    let daltaScroll = 0;
    [...tabItems].forEach((item) => 
        item.addEventListener("click",handleTabClick)
    );
    function handleTabClick(e){
        [...tabItems].forEach((item) => item.classList.remove("active"));
        e.target.classList.add("active");
        let leftSpacing = e.target.offsetLeft - tabOffsetLeft;
        if(e.target.offsetLeft >= tabOffsetLeft){
            leftSpacing = e.target.offsetLeft - tabOffsetLeft;
        }
        console.log(leftSpacing/2,0);
    }
    tabList.addEventListener("wheel",function(e){
        const delta = e.deltaY; 
        this.scrollLeft += delta;
    });
    tabNext.addEventListener("click",function(e){
        tabList.scrollLeft += deltaScroll;
        console.log(tabList.scrollLeft);
    });
});