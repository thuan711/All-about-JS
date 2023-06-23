const button = document.querySelector(".button");
const template = `<div class="modal">
        <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>`;
button.addEventListener("click", function() {
    document.body.insertAdjacentHTML("beforeend",template);
});
document.body.addEventListener("click", function(e){
    console.log(e.target);
    if(e.target.matches(".modal-close")){
        const model = e.target.parentNode.parentNode;
        model.parentNode.removeChild(model);
    }
});
