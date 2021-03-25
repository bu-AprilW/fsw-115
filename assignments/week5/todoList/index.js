const todoForm = document.getElementById("todoForm");

// GET request
axios.get("https://api.vschool.io/[april_w]/todo/newTodo/")
.then(response => {
    
    for (let i = 0; i < response.data.length; i++) {
        const li = document.createElement("li");
        const ul = document.getElementsByTagName("ul")[0]
        ul.append(li);
        li.classList = "list";

        const h2 = document.createElement("h2");
        h2.textContent = response.data[i].title;
        li.appendChild(h2);
        const h3 = document.createElement(h3);
        h3.textContent = "Description: " + response.data[i].description;
        li.appendChild(h3);
        const h4 = document.createElement("h4");
        h4.textContent = "Price: $" + response.data[i].price;
        li.appendChild(h4);


        //PUT checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.id = response.data[i]._id;
        if (response.data[i].completed === true) {
            checkbox.checked = true;
            h2.style.textDecoration = "line-through";
            h3.style.textDecoration = "line-through";
            h4.style.textDecoration = "line-through";
        }
        li.appendChild(checkbox);

        checkbox.addEventListener("click", (event) => {
            let updates;
            if (checkbox.checked) {
                updates = true;
                {
                    h2.style.textDecoration = "line-through"
                }
            } else {
                updates = false;
            }
            axios.put("https://api.vschool.io/[april_w]/todo/newTodo/" + event.currentTarget.id, {completed:updates})
            .then(response => (response.data))
            .catch(error => console.log(error))
        })

        // delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete";
        deleteBtn.id = response.data[i]._id
        deleteBtn.style.marginLeft = "px";
        deleteBtn.style.paddingRight = "125px";
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", (event) => {
            axios.delete("https://api.vschool.io/[april_w]/todo/newTodo/" + event.currentTarget.id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        })
    }
})
.catch(error => console.log(error))

//POST new task
todoForm .addEvemtListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }
    axios.post("https://api.vschool.io/[april_w]/todo/newTodo/", newTodo)
    .then(response => {response.data
    todoForm.reset()})
    .catch(error => console.log(error))
})