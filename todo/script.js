
const addBtn=  document.querySelector('#addTodoButton');
const searcInp=document.querySelector('#searchInput');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const getTodos = () => {
    let todos = [];
    if(localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
  }
  
  const addTodo = () => {;
    const todoText = todoInput.value.trim();
    if(todoText !== '') {
      let todos = getTodos();
      todos.push(todoText);
      localStorage.setItem('todos', JSON.stringify(todos));
      showTodos();
      todoInput.value = '';
    }
  }
  
  const showTodos = () => {
    let todos = getTodos();
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        ${todo}
        <button class="btn btn-danger btn-sm float-right" onclick="deleteTodo(${index})"><i class="fas fa-trash"></i></button>
      `;
      todoList.appendChild(li);
    });
  }
  
  const deleteTodo = (index) => {
    let todos = getTodos();
    todos.splice(index, 1);
    alert("ugurla silindi")
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodos();
  }
  
addBtn.addEventListener('click', addTodo);
searcInp.addEventListener('input', () => {
    const searchTerm = searcInp.value.trim().toLowerCase();
    const todos = getTodos();
    const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(searchTerm));
    showFilteredTodos(filteredTodos);
  });
  
  const showFilteredTodos = (filteredTodos) => {
    todoList.innerHTML = '';
    filteredTodos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        ${todo}
        <button class="btn btn-danger btn-sm float-right" onclick="deleteTodo(${index})"><i class="fas fa-trash"></i></button>
      `;
      todoList.appendChild(li);
    });
  }
  
  showTodos()