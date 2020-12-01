const todoInput = document.querySelector('#todo');
const todoButton = document.querySelector('#btn');
const todoList = document.querySelector('#todo-list');

todoButton.onclick = addTodo();

const addTodo = event => {
  //PREVENTDEFAULT
  event.preventDefault();
  //create a todo div.
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create Li.
  const newTodo = document.createElement('li');
  newTodo.innerText = 'item';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //completed button.
  const completed = document.createElement('button');
  completedButton.innerHTML = '<i class="far fa-check-circle"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

 // <i class="far fa-trash-alt"></i>
    //delete button.
    const deleted = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-trash"></i>';
    completedButton.classList.add('delete-btn');
    todoDiv.appendChild(deletedButton);
}
