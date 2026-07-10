// Function runs when the Add button is clicked
function addtodo() {

    // Get the text entered in the input box
    const list = document.getElementById("todo").value;

    // If the input box is empty
    if (list === "") {

        // Show an alert message
        alert("Please enter a todo");

        // Stop the function here
        return;
    }

    // Create a new <li> element
    const li = document.createElement("li");

    // Add HTML inside the <li>
    li.innerHTML = `
        <!-- Display the task inside a span -->
        <span>${list}</span>

        <!-- 'this'current element refers to the Update button -->
        <button onclick="updateTodo(this)">Update</button>

        <!-- 'this' refers to the Delete button -->
        <button onclick="deleteTodo(this)">Delete</button>
    `;

    // Add the new <li> to the <ol> list
    document.getElementById("todolist").appendChild(li);

    // Clear the input box after adding the task
    document.getElementById("todo").value = "";
}


// Function to delete a task
function deleteTodo(btn) {

    // btn = the Delete button that was clicked

    // parentElement = the <li> that contains the button

    // remove() deletes the entire <li> from the page
    btn.parentElement.remove();
}

// Function to update a task
function updateTodo(btn) {

    // Ask the user to enter a new task
    const newlist = prompt("Enter the new todo");

    // If the user presses Cancel, stop the function
    // if (newlist === null) {
    //     return;
    // }
    // Find the <span> inside the same <li>
    const span = btn.parentElement.querySelector("span");

    // Replace the old task with the new task
    span.innerHTML = newlist;
}