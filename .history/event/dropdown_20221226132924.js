const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelector(".dropdown__items");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list");
dropdownSelect.addEventListener("click",function(e) {
    
        dropdownList.classList.toggle("show");
    
});
dropdownItems.forEach((item) =>
    item.addEventListener("click", function(e) {
        const text = e.target.querySelector(".dropdown__text").textContent;
        dropdownSelected.textContent = text;
        dropdownList.classList.remove("show");;
    })
);