window.addEventListener("load", function(){
    const passwordInput = document.querySelector("input");
    passwordInput.addEventListener("input", function(event){
        const value = event.target.value;
        const checkLenghtClass = event.target.parentNode.querySelector(".check-lenght");
        const checkItem = event.target.parentNode.querySelector(".check-item");
        if(!value){
            [...checkItem].forEach(item =>{
                item.classList.remove("active");
                item.classList.remove("unactive");
            })
        }
        if(value.length < 8){
            checkLenghtClass.classList.add("unactive");
        } else{
            checkLenghtClass.classList.add("active");
            checkLenghtClass.classList.remove("unactive");
        }
    });
});