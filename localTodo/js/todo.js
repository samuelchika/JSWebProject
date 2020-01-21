//we have to create elements and attach the class to them
function createElem(element, elementClass) {
    let newElement = document.createElement(element);
    newElement.className = elementClass;

    return newElement;
}

function createTodo(text) {
    const li = createElem("li", "todo");
    const p = createElem("p", "todoText");
    p.innerHTML= text;
    const buttonDiv = createElem("div",  "buttons");
    const upButton = createElem("button",  "up");
    const downButton = createElem("button",  "down");
    const removeButton = createElem("button",  "remove");
    li.append(p);
    upButton.innerHTML = "Up";
    downButton.innerHTML = "Down";
    removeButton.innerHTML = "Remove";
    upButton.setAttribute("data-purpose", "up");
    downButton.setAttribute("data-purpose", "down");
    removeButton.setAttribute("data-purpose", "remove");
    buttonDiv.append(upButton);
    buttonDiv.append(downButton);
    buttonDiv.append(removeButton);
    li.append(buttonDiv);
    return li;
}
const todoBody = document.querySelector("#todoBody");
const input = document.querySelector("#todoValue");
const noTodos = document.querySelector(".no-todo");
input.addEventListener("keyup", function(e){
const ul = todoBody.querySelector(".todo-list");
    if(input.value.length >= 1) {
        if(e.keyCode === 13){
            if(!todoBody.querySelector(".todo-list")) {
                todoBody.removeChild(noTodos);
                const ull = createElem("ul", "todo-list");
                todoBody.append(ull);
                ull.append(createTodo(input.value));
                input.value = "";
            } else {
                ul.append(createTodo(input.value));
                input.value = "";
            }
        }
    }

});
todoBody.addEventListener("click", (e) => {
    if(e.target.localName === "button") {
            const button = e.target;
            const action = button.getAttribute("data-purpose");
            const li = button.parentElement.parentElement;
            const ul = li.parentElement;
            switch (action) {
                case "up":
                                const previous = li.previousSibling;
                                if(previous !== null) {
                                    ul.removeChild(li);
                                    ul.insertBefore(li, previous);
                                }
                                //console.log(li.previousSibling);
                                //console.log("ups");
                                break;
                case "down":
                                const next = li.nextSibling;
                                if(next !== null) {
                                    ul.removeChild(li);
                                    ul.insertBefore(li, next.nextSibling);
                                }
                                break;
                case "remove":
                                        ul.removeChild(li);
                                        if(!todoBody.querySelector(".todo")){
                                            if(todoBody.querySelector(".todo-list")){
                                                todoBody.removeChild(ul);
                                                const p = createElem("p", "no-todo");
                                                p.innerHTML= "No Todo's";
                                                todoBody.append(p);
                                            }
                                        }

                                        break;


            }
    }
});
