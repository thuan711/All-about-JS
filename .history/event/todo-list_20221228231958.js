window.addEventListener("load", function(){
    const form = document.querySelector(".todo-form");
    const todolist = document.querySelector(".todo-list");
    function createTodoItem (){
        const teamplate = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove"></i>
      </div>`;
      todoList.insertAdjacentHTML("beforeend", teamplate);
    }
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const todoVal = this.elements["todo"].value;
        createTodoItem(todoVal);
        this.elements["todo"].value = "";
    });
});