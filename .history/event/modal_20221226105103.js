const button = document.querySelector(".button");
const template = `<div class="modal">
        <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>`;
button.addEventListener("click", function() {
    document.body.insertAdjacentHTML("beforeend",template);
});
