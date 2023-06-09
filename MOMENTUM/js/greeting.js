const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('#login-form input');
const $greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden' // 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
// 중요한 정보를 담은게 아니여서 대문자로 변수 작성
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = $loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // username값을 localStroage에 저장 localStorage.setItem("저장될 아이템의 이름",값);
  paintGreetings(username);
}

function paintGreetings(username) {
  $greeting.innerText = `Hello ${username}`
  $greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 존재하는 정보 불러오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { //localStorage에 username의 값이 없다면
  // form 보여주기
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', onLoginSubmit);
} else { // 있다면 
  // h1 보여주기
  paintGreetings(savedUsername);
}