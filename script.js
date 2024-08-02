/*const newTodoInput = document.getElementById ('newTodo');
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')

function addTodo(){

    const newTodoText = newTodoInput.value;
    newTodoInput.value = '';

    const listItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span')
    const deleteBtn = document.createElement('button')


    completeCheckbox.type = 'checkbox';

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);


    todoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';

    todoList.append(listItem);


addBtn.addEventListener('click',function(){
    todoList.removeChild(listItem);
})

} */

/* addBtn.addEventListener('click',addTodo) */

/* day 8 */
/* 22 min */

/*const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')


function addTodo(){


    const newTodoText = newTodoInput.value;
    newTodoInput.value = '';




    const listItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span')
    const deleteBtn = document.createElement('button')




    completeCheckbox.type = 'checkbox';


    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);




    todoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';


    todoList.appendChild(listItem);

}
addBtn.addEventListener('click',addTodo) */

const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')


function addTodo(){


    const newTodoText = newTodoInput.value;
    newTodoInput.value = '';




    const listItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span')
    const deleteBtn = document.createElement('button')




    completeCheckbox.type = 'checkbox';


    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);




    todoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';


    todoList.appendChild(listItem);




    deleteBtn.addEventListener('click', function(){
        todoList.removeChild(listItem);
    })
}


addBtn.addEventListener('click',addTodo)