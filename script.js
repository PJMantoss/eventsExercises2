document.addEventListener("DOMContentLoaded", function(){
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList")

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();
    })
})
