const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
    const newTodoText = newTodoInput.value.trim();
    if (newTodoText === '') return; // Prevent adding empty tasks
    newTodoInput.value = '';

    const listItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    completeCheckbox.type = 'checkbox';

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    todoText.textContent = newTodoText;
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';

    todoList.appendChild(listItem);

    // for delete task
    deleteBtn.addEventListener('click', function () {
        todoList.removeChild(listItem);
    });

    // for edit task
    editBtn.addEventListener('click', function () {
        const newEditText = prompt('Edit your task:', todoText.textContent);
        if (newEditText !== null && newEditText.trim() !== '') {
            todoText.textContent = newEditText.trim();
        }
    });
}

addBtn.addEventListener('click', addTodo);

// add a task on "Enter" key press
newTodoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
