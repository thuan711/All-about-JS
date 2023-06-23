window.addEventListener("load", function(){
    const passwordInput = document.querySelector("input");
    passwordInput.addEventListener("input", function(event){
        const value = event.target.value;
        const checkLenghtClasss = event.target.parentNode.querySelector(".check-lenght");
        const checkItem = event.target.parentNode.querySelector(".check-item");
        if(!value){
            [...checkItem].forEach(item =>{
                item.classList.remove("active");
                item.classList.remove("unactive");
            })
        }
        if(value.length < 8){
            checkLenghtClasss.classList.add("unactive");
        } else{
            checkLenghtClasss.classList.add("active");
            checkLenghtClasss.classList.remove("unactive");
        }
    });
});