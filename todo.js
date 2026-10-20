const form = document.querySelector("#todoForm")
const input = document.querySelector("#todoInput")
const submitBtn = document.querySelector("#submit")
const todoContainer = document.querySelector("#todoContainer")

let todos = []

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const todo = {
        text : input.value
    }

    todos.push(todo);
    console.log(todos);
    form.reset()
    todoDisplay();
})

function todoDisplay(){
    todoContainer.innerHTML = "";
    todos.forEach((data, index)=>{
        const todoCard = document.createElement("div");
        const context = document.createElement("p");
        context.textContent = data.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteBtn");

        deleteButton.addEventListener("click",function(e){
            todos.splice(index,1);
            todoDisplay();
        });

        todoCard.classList.add("todo");
        // यहाँ दोनों elements को append करना है
        todoCard.append(context, deleteButton);
        todoContainer.append(todoCard);
    })
}
