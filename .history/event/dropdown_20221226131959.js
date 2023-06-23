const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelector(".dropdown__items");
const dropdownSelected = document.querySelector(".dropdown__selected");
dropdownSelect.addEventListener("click",function(e) {
    console.log(e.target);
    const dropdownList = e.target.nextElementSibling;
    if(dropdownList){
        dropdownList.classList.toggle("show");
    }
});
