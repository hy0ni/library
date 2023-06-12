const $toDoForm = document.getElementById('todo-form');
const $toDoInput = $toDoForm.querySelector('input');
const $toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";
let toDos = [];

function saveToDo() {
  // toDos array의 내용을 localStorage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify()사용하여 값을 string으로 저장
}

function deleteToDo(event) {
  // button click시 li 제거
  const li = event.target.parentElement;
  console.log(li.id)
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 각각의 item 구별하기위함
  }
  toDos.push(newTodoObj); // newTodo list 추가 될때마다 obj로 array에 push
  paintToDo(newTodoObj);
  saveToDo();
}
$toDoForm.addEventListener('submit', handleToDoSubmit);

// localStorage에는 오직 텍스트만 저장가능 array저장X
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos)
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse array로 저장
  toDos = parsedToDos; // 새로운 array생성시 기존 array가져오기
  parsedToDos.forEach(paintToDo); //array에 있는 각각의 아이템을 화면에 뿌려주기
}
