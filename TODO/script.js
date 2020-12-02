const todoInput = document.getElementById('todo-item');
const todoButton = document.querySelector('#btn');
const itemList = document.querySelector('#item-list');

 const todoApp = {
   todos: [],
   create: function(todo){
   this.todos.push(todo);
   },
   getAllTodos: function() {
    return this.todos;
   },
   completeTodo: function(id){
    const todo = this.todos.find(item => item.id === id)
    if(todo.completed) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }
   }
}

const addTodo =() => {
  console.log(todoInput);
  const todo = {
    title: todoInput.value,
    id: randomID(),
    completed: false,
  }
  todoApp.create(todo);
  displayTodos();
}

// create display function.
const displayTodos = () => {
  const data = todoApp.todos.map((todo)=> {
    return (`<li>${todo.title}<i class="far fa-check-circle" onclick="complete('${todo.id}');"></i></li>`);
  })
  itemList.innerHTML = data.join('\n');
}

// complete the display.
const complete = (id) => {
  todoApp.completeTodo(id);
  displayTodos();
}












//function to generate random id.
const randomID = function() {
  const letters = "0123456789ABCDEF";
  let id = "TD";
  for (let i = 0; i < 9; i++) {
    id += letters[Math.floor(Math.random() * 16)];
  }
  return id;
}


































// todoButton.onclick = addTodo();

// const addTodo = event => {
//   //PREVENTDEFAULT
//   event.preventDefault();
//   //create a todo div.
//   const todoDiv = document.createElement('div');
//   todoDiv.classList.add('todo');
//   //create Li.
//   const newTodo = document.createElement('li');
//   newTodo.innerText = 'item';
//   newTodo.classList.add('todo-item');
//   todoDiv.appendChild(newTodo);

//   //completed button.
//   const completed = document.createElement('button');
//   completedButton.innerHTML = '<i class="far fa-check-circle"></i>';
//   completedButton.classList.add('complete-btn');
//   todoDiv.appendChild(completedButton);

//  // <i class="far fa-trash-alt"></i>
//     //delete button.
//     const deleted = document.createElement('button');
//     completedButton.innerHTML = '<i class="fas fa-trash"></i>';
//     completedButton.classList.add('delete-btn');
//     todoDiv.appendChild(deletedButton);
// }
