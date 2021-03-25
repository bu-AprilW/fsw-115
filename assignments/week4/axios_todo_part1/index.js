const form = document.getElementById("body")

function getTodos() {
    return axios.get("https://api.vschool.io/[april_w]/todo")
    .then(response => {
        console.log(response.data)
        return response.data
    })
    .catch(error => console.log(error))
}

const todo = document.getElementById("list")

function renderTodo(data) {
    const h1 = document.createElement('h1')
    h1.textContent = data.title
    todo.appendChild(h1)
    const h3 = document.createElement('h3')
    h3.textContent = "Destination - " + data.descripton
    todo.appendChild(h3)
    const price = document.createElement('h3')
    price.textContent = "Price - $" + data.price
    todo.appendChild(price)
    const img = document.createElement("img")
    img.setAttribute("src", data.imgUrl)
    todo.appendChild(img)

    const completeTask = document.createElement('h3')
    completeTask.textContent = "Check the box below when task is completed!"
    todo.appendChild(completeTask)

    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", checkbox)
    todo.appendChild(checkbox)

    const deleteTask = document.createElement('h3')
    deleteTask.textContent = "Click the delete button to remove this task from the list!"
    todo.appendChild(deleteTask)

    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    todo.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", function() {
        return axios.delete("https://api.vschool.io/[april_w]/todo/" + data._id)
        .then(response => {console.log(response)})
        .catch(error => console.log(error))
    })

    checkbox.addEventListener("change", function() {
        console.log("Checkbox was checked!")
        if (checkbox.checked) {
            const todoUpdate = {
                completed: true
            }
            return axios.put("https://api.vschool.io/[april_w]/todo/" + data._id, todoUpdate)
            .then(response => {console.log(response)})
            .catch(error => console.log(error))
        }
    })
    return data
}

function output() {
    getTodos().then(todos => {
        for (let i = 0; i < todos.length; i++) {
            renderTodo(todos[i])
        }
    })
}

function createTodo(title = "", description = "", price = "", imgUrl = "") {
    return axios.post("https://api.vschool.io/[april_w]/todo", {title: title, description: description, price: price, imgUrl: imgUrl})
}

function clearList() {
    const el = document.getElementById('list')
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

function complete() {
    if (checkbox.checked) {
        const todoUpdate = {
            completed: true
        }
        return axios.put("https://api.vschool.io/[april_w]/todo/NEED TO PASS IN ID", todoUpdate)
    }
}

document.todo.addEventListener("submit", function(event) {
    event.preventDefault()
    clearList()
    createTodo(title.value, description.value, price.value, imgUrl.value)
    .then(response => output())
})