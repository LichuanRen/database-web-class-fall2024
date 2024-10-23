// Get references to the HTML elements
const form = document.getElementById('form');  // The form for submitting a new todo
const input = document.getElementById('input');  // The input field where users type in a new todo
const todosUL = document.getElementById('todos');  // The <ul> element where the todos will be listed

// Load existing todos from localStorage (if any)
const todos = JSON.parse(localStorage.getItem('todos'));  // Retrieves saved todos from localStorage

// If there are any saved todos, add them to the list
if (todos.length > 0) {
    todos.forEach(function(todo) {
        addTodo(todo);  // Calls the addTodo function for each saved todo
    });
}

// Listen for when the form is submitted (i.e., when the user presses Enter or clicks the submit button)
form.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from refreshing the page (default behavior)
    addTodo();  // Call addTodo to add the new todo item
});

// Function to add a todo to the list
function addTodo(todo) {
    let todoText = input.value;  // Get the text the user typed in the input field

    // If a 'todo' argument was passed in, use its text instead (used when loading saved todos)
    if (todo) {
        todoText = todo.text;  // Load the text from the saved todo
    }

    // Only add the todo if there is text entered
    if (todoText !== '') {
        const todoEl = document.createElement('li');  // Create a new <li> element
        todoEl.innerText = todoText;  // Set the <li> text to be the todo's text

        // If this todo was already completed (from saved data), mark it as completed
        if (todo && todo.completed) {
            todoEl.classList.add('completed');  // Add a CSS class to indicate it's completed
        }

        // Toggle the completed state when the user clicks on the todo
        todoEl.addEventListener('click', function() {
            todoEl.classList.toggle('completed');  // Toggle the 'completed' class on and off
            updateLS();  // Update localStorage after changing the todo state
        });

        // Remove the todo when the user right-clicks on it
        todoEl.addEventListener('contextmenu', function(e) {
            e.preventDefault();  // Prevent the default context menu from appearing
            todoEl.remove();  // Remove the todo element from the page
            updateLS();  // Update localStorage after removing the todo
        });

        // Add the new <li> element to the <ul> list
        todosUL.appendChild(todoEl);

        // Clear the input field after adding the todo
        input.value = '';

        // Update localStorage with the new list of todos
        updateLS();
    }
}

// Function to update localStorage with the current list of todos
function updateLS() {
    const todosEl = document.querySelectorAll('li');  // Get all <li> elements (i.e., the todo items)

    const todos = [];  // Create an empty array to hold the todos

    // Loop over each <li> element and add its text and completed status to the todos array
    todosEl.forEach(function(todoEl) {
        todos.push({
            text: todoEl.innerText,  // The text of the todo
            completed: todoEl.classList.contains('completed')  // Whether the todo is marked as completed
        });
    });

    // Save the todos array to localStorage as a JSON string
    localStorage.setItem('todos', JSON.stringify(todos));
}
