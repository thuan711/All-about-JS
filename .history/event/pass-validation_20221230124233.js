window.addEventListener("load", function(){
    const passwordInput = document.querySelector(".input");
    passwordInput.addEventListener("input", function(event){
        const value = event.target.value;
        const checkLenghtClass = event.target.parentNode.querySelector(".check-lenght");
        const checkItems = event.target.parentNode.querySelector(".check-item");
        const checkUpperClass = event.target.parentNode.querySelector(".check-upper");
        const checkNumberClass = event.target.parentNode.querySelector(".check-number");
        if(!value){
            [...checkItems].forEach(item =>{
                item.classList.remove("active");
                item.classList.remove("unactive");
            })
        }
        if(value.length < 8){
            checkLenghtClass.classList.add("unactive");
            checkLenghtClass.classList.remove("active");
        } else{
            checkLenghtClass.classList.add("active");
            checkLenghtClass.classList.remove("unactive");
        }

        if(!/A-Z/.test(value)){
            checkUpperClass.classList.add("uunactive");
            checkUpperClass.classList.remove("active");
        } else {
            checkUpperClass.classList.add("active");
            checkUpperClass.classList.remove("unactive");
        }

        if(!/0-9/.test(value)){
            checkNumberClass.classList.add("uunactive");
            checkNumberClass.classList.remove("active");
        } else {
            checkNumberClass.classList.add("active");
            checkNumberClass.classList.remove("unactive");
        }
    });
});