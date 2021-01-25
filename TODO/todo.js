const itemInput = document.getElementById('item');
const inputForm = document.getElementsByClassName('form')[0];
const editInput = document.getElementById('edit-input');
const messageEl = document.getElementById('message');
const itemListElement = document.getElementById('item-list');



const todoApp = {

    create: function (todo) {
        const todoList = loadTodos();
        todoList.push(todo);
        localStorage.setItem('todos', JSON.stringify(todoList) );
       const data = loadTodos();
        return data[data.length - 1];
    },

    get: function (id) {
        const todos = loadTodos();
        const todo = todos.find(item => item.id === id);
        return todo;
    },

    getAll: function () {
        const todos = loadTodos();
        return todos;
    },

    tick: function (id) {
        const todos = loadTodos();
        const todo = todos.find(item => item.id === id);
        todo.isDone === true ? todo.isDone = false : todo.isDone = true;
localStorage.setItem("todos",JSON.stringify(todos) );   
        displayTodos();
    },

    edit: function (id, name) {
            const todos = loadTodos();
            const todo = todos.find(item => item.id === id);
            todo.name = name;
            localStorage.setItem("todos", JSON.stringify(todos) );   
            displayTodos();     
    },

    delete: function (id) {
        const todos = loadTodos();
        const index = todos.findIndex(item => item.id === id);
        todos.splice(index,1);
localStorage.setItem("todos",JSON.stringify(todos) );        
    } 

    

}




//load todoes from local storage
const loadTodos = () =>{
    const todos = JSON.parse(localStorage.getItem('todos'));
       //check if there are todoes 
if(!todos  || todos.length <1){
    return [];
    }
    else{
        return todos;
    }
}


const saveTodo = (id) => {
    const todo = {
        id:randomID(),
     name : itemInput.value,
        isDone: false
    }
    if(todo.name.length < 1){
       messageEl.innerText = "Input cannot be empty, please type in something"
    setTimeout(()=>{
        messageEl.innerText = ""
    }, 1500)
       return; 
    }
    
       const item = todoApp.create(todo);
       const todoItem = `<div class="todo-item">
       <div class="item-name" >${item.name}</div>
       <div><a href="#" class="complete-todo" onclick="completeTodo('${ item.id}')"><i class="fa fa-check-circle"></i></a>
       <a href="#" class="edit-todo" onclick = "editTodo(this,'${item.id}')" ><i class="fa fa-edit"></i></a>
       <a href="#" class="delete-todo" onclick="deleteTodo('${item.id}')"><i class="fa fa-times-circle"></i></a>
       </div>
       </div>` ;
       itemListElement.innerHTML +=  todoItem;
       itemInput.value ="";
}

//check all todos for completion before displaying
const displayTodos = () => {
const todos = loadTodos();
const todoItem = todos.map((item)=>{
let visibility = '';
let strikeText = ''
if(item.isDone){
    visibility = "visibility",
    strikeText = "strike"
}
    return(
        `<div class="accordion">
        <div class="todo-item">
<div class="item-name ${strikeText} ${visibility}" >${item.name}</div>
<div><a href="#" class=" ${visibility}" onclick="completeTodo('${ item.id}')"><i class="fa fa-check-circle"></i></a>
<a href="#" id="edit-btn" class="edit-todo" onclick = "editTodo(this,'${item.id}')" ><i class="fa fa-edit"></i></a>
<a href="#" class="delete-todo" onclick="deleteTodo('${item.id}')"><i class="fa fa-times-circle"></i></a>
</div>
</div>
<div id="edit-form" class="edit-form hide">
<div id="edit-message"></div>
<form action="" onsubmit="return false ">
  <input type="text" id="edit-input" placeholder="Edit Item ..." value="${item.name}" />
  <button type="submit" onclick="editTodoHandler(this,'${item.id}');">Submit</button>
</form>
</div>
</div>
`
    )
})
itemListElement.innerHTML = todoItem.join('\n');

}

const completeTodo = (id) =>{
  
  todoApp.tick(id);  
}

const editTodoHandler = (el, id)=>{
const todoName = el.previousElementSibling.value;
if(todoName.length <1){
   document.getElementById('edit-message').innerText = "Input field cannot be empty, please input value";
   setTimeout(()=>{
    document.getElementById('edit-message').innerText = ""
}, 5000)
return;
}
todoApp.edit(id,todoName);
alert("Field successfully edited");
}

const editTodo = (el)=>{
const panel = el.parentElement.parentElement.nextElementSibling;
if (panel.style.display === "block") {
  panel.style.display = "none";
} else {
  panel.style.display = "block";
}

}

const deleteTodo = (id) => {
    todoApp.delete(id);
    displayTodos();
}

const clearItems = ()=>{
    localStorage.removeItem("todos");
itemListElement.innerText="";
}

const randomID = function() {
    const letters = "0123456789ABCDEF";
    let id = "TD";
    for (let i = 0; i < 9; i++) {
      id += letters[Math.floor(Math.random() * 16)];
    }
    return id;
  }

  function saveInitialData() {
    const data =[
        {id: "TD01C4DF4B4", name: "Make a todo", isDone: false}, 
        {id: "TD06902BE9F", name: "Pray", isDone: false}, 
        {id: "TD069045E9F", name: "Suplication", isDone: false}, 
        {id: "TD06978BE9F", name: "Code", isDone: false},
        {id: "TD06902B69F", name: "Read", isDone: false},
        {id: "TD07902BE9F", name: "Breakfast", isDone: false}
    ];
localStorage.setItem('todos', JSON.stringify(data));
const todos = JSON.parse(localStorage.getItem('todos'));
  }
  saveInitialData();

  displayTodos();