window.addEventListener("load", function(){
    function renderSweetAlert() {
        const template = `
            <div class="sweet-alert>
                <i class="fa fa-check sweet-icon"></i>
                <p class="sweet-text">Heloo Thuận</p>
            </div>    
        `;
        document.body.insertAdjacentHTML("beforeend", template);
    }
    const botton = document.querySelector(".botton");
    botton.addEventListener("click", function(){
        renderSweetAlert();
        const sweetItem = document.querySelector(".sweet-alert");
        if(sweetItem){
            setTimeout(function(){
                sweetItem.parentElement.removeChild(sweetItem);
            }, 1000);
        }
    });
});