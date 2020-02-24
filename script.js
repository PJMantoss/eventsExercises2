/*
Q1. Build a todo app. As a user, you should be able to:
Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo
*/
document.addEventListener("DOMContentLoaded", function(){
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList")

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();
        
        let removeBtn = document.createElement("button");

        removeBtn.innerHTML = "X";
        
        let newTodo = document.createElement("li");
        newTodo.innerHTML = document.getElementById("task").value;

        newTodo.appendChild(removeBtn);
        todoList.appendChild(newTodo);
        
        todoForm.reset();
    })
    
    todoList.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'li'){
            event.target.style.textDecoration = 'line-through';
        } else if (event.target.tagName.toLowerCase() === 'button'){
            event.target.parentNode.remove(); 
        }
    })
    
})

/*Q2.
Using localStorage, try to store your todos so that if you refresh
the page you do not lose what you have added to the list! As a super bonus,
 try to also save todos that you have marked as complete!
*/
document.addEventListener("DOMContentLoaded", function(){
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList");
    
    //retrieve from localStorage
    let savedTodo = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i=0; i < savedTodo.length; i++){
        let newTodo = document.createElement("li");
        newTodo.innerHTML = savedTodo[i].task;
        newTodo.innerHTML = savedTodo[i].task;
        newTodo.isCompleted = savedTodo[i].isCompleted ? true : false;

        if (newTodo.isCompleted){
            newTodo.style.textDecoration = 'line-through';
        }
        
        todoList.appendChild(newTodo);
    }
    
    todoForm.addEventListener("submit", function(event){
        event.preventDefault();

        let newTodo = document.createElement("li");
    });
})
