const $toDoForm = document.getElementById('todo-form');
const $toDoInput = $toDoForm.querySelector('input');
const $toDoList = document.getElementById('todo-list');

function deleteToDo(event) {
  // button click시 li 제거
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = "❌";
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  $toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = $toDoInput.value;
  $toDoInput.value = "";// enter시 input값 비우기
  paintToDo(newTodo);
}
$toDoForm.addEventListener('submit', handleToDoSubmit);
