const $toDoForm = document.getElementById('todo-form');
const $toDoInput = $toDoForm.querySelector('input');
const $toDoList = document.getElementById('todo-list');

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newTodo;
  $toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = $toDoInput.value;
  $toDoInput.value = "";// enter시 input값 비우기
  paintToDo(newTodo);
}
$toDoForm.addEventListener('submit', handleToDoSubmit);