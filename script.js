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
