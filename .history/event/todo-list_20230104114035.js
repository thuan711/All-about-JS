window.addEventListener("load", function(){
    const form = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    let todos = localStorage ? JSON.parse(localStorage.getItem("todoList")) : [];
    if(Array.isArray(todos) && todos.length > 0){
        [...todos].forEach(item => createTodoItem(item));
    }
    function createTodoItem (title){
        const teamplate = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove"></i>
      </div>`;
      todoList.insertAdjacentHTML("afterend", teamplate);
    }
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const todoVal = this.elements["todo"].value;
        if(!todoVal) return;
        createTodoItem(todoVal);
        todos.push(todoVal);
        console.log(todos);
        localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
        this.elements["todo"].value = "";
    });
    todoList.addEventListener("click", function(e){
        if(e.target.matches(".todo-remove")){
            const todo = e.target.parentNode;
            todo.parentNode.removeChild(todo);
            const todoText = e.target.previousElementSibling
        }
    });
});