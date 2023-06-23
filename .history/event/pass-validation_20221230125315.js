window.addeListener("load", function(){
    const passwordInput = document.querySelector(".input");
    passwordInput.addeListener("input", function(e){
        const value = e.target.value;
        const checkLenghtClass = e.target.parentNode.querySelector(".check-lenght");
        const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
        const checkNumberClass = e.target.parentNode.querySelector(".check-number");
        const checkSpecialClass = e.target.parentNode.querySelector(".check-special");
        const checkItems = e.target.parentNode.querySelector(".check-item");
        if(!value){
            [...checkItems].forEach((item) =>{
                item.classList.remove("active");
                item.classList.remove("unactive");
            });
            return;
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

        if(!/[$@%^&*()!|-]/.test(value)){
            checkSpecialClass.classList.add("uunactive");
            checkSpecialClass.classList.remove("active");
        } else {
            checkSpecialClass.classList.add("active");
            checkSpecialClass.classList.remove("unactive");
        }
    });
});