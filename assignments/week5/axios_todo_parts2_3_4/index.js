var todos = [];

const todoList = document.getElementById("allTasks");

function addNewTodo() {
    console.log("Add new todo...");
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    console.log("value: " + title);
    console.log("description1: " + description);
    console.log("price: " + price);

    axios({
        method: "post", 
        url: "https://api.vschool.io/[april_w]/todo",
        data: {
            title: title,
            price: price,
            description: description
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log("ERROR");
        console.log(error);
    });
}

function checkBoxChecked(todoIndexNumber) {
    var todo = todos[todoIndexNumber];
    document.todo.completed = true;
    var id = todo._id;
    var url = "https://api.vschool.io/[april_w]/todo" + id;

    axios.put(url, todo)
    .then(response => {
        console.log(response);
    });


function deleteTodo(todoIndexNumber) {
    var todo = todos[todoIndexNumber];
    var id = todo._id;
    var url = "https://api.vschool.io/[april_w]/todo/" + id;

    axios.delete(url)
    .then(response => {
        console.log(response);
    });
}


}


let loadTodos = function loadTodos() {
    axios.get("https://api.vschool.io/[april_w]/todo")
    .then(response => {
        const todos = response.data;
        console.log(response);
    });
}


function showData(todos) {
    for (let i = 0; i < todos.length; i++) {
        console.log();

        let div = document.createElement("div");
        div.classList.add("todo-entry");

        let title = document.createElement("h2");
        let description = document.createElement("p");
        let price = document.createElement("p");
        let button = document.createElement("button");
        button.setAttribute("onclick", "deleteTodo(" + i + ")");
        button.innerText = "Delete";

        title.textContent = todos[i].title;
        description.textContent = todos[i].description;

        if (todos[i].completed) {
            title.classList.add("strikethrough");
            description.classList.add("strikethrough");
        } else {
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("onchange", "checkBoxChecked(" + i + ")");
            div.appendChild(checkbox);
        }

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(button);
        document.body.appendChild(div);
    }
}