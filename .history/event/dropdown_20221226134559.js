const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const dropdownCarret = document.querySelector(".dropdown__carret");
dropdownSelect.addEventListener("click",function(e) {
    
        dropdownList.classList.toggle("show");
        dropdownCarret.classList.toggle("fa-caret-up");
});
dropdownItems.forEach((item) =>
    item.addEventListener("click", function(e) {
        const text = e.target.querySelector(".dropdown__text").textContent;
        dropdownSelected.textContent = text;
        dropdownList.classList.remove("show");;
    })
);
document.addEventListener("click", function(e) {
   if(!dropdown.contains(e.target)){
    dropdownList.classList.remove("show");
   } 
});