const saveBtn = document.getElementById('save');
const textInput = document.getElementById('text');
const fileInput = document.getElementById('file');
const modeBtn = document.getElementById('mode-btn');
const destroyBtn = document.getElementById('destroy-btn');
const eraserBtn = document.getElementById('eraser-btn');
const colorOptions = Array.from(document.getElementsByClassName('color-option')); //배열로 변경
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value; // javascript가 로드되고 한번 실행됨
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

function onMove(event) { // 유저가 마우스를 움직이고 
  if (isPainting) {
    // true라면 stroke를 사용하여 선을 그리고 함수를 종료.
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath(); // 선이 이어지는 것 방지
  // false라면 브러쉬만 움직인다.
  ctx.moveTo(event.offsetX, event.offsetY); //마우스가 있는 곳으로 브러쉬를 움직인다.
}
function startPainting() { // isPainting = true;라면 그리고
  isPainting = true;
}
function cancelPainting() {
  isPainting = false; // isPainting = false;라면 움직이고
  ctx.beginPath();
}
function onLineWidthChange(event) {
  // console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  // console.log(event.target.value);
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  // console.dir(event.target.dataset.color);
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue; // input color변경하여 선택한 색상 확인
}

function onModeClick() {
  // 채우기 모드
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "💧 Fill"
  } else {
    // Draw 모드 
    isFilling = true;
    modeBtn.innerText = "✏️ Draw"
  }
}

function onCanvasClick() {
  if (isFilling) {
    // 캔버스 크기의 새로운 사각형을 만들고, 해당 색상으로 채워준다.
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = 'white';
  isFilling = false;
  modeBtn.innerText = "Fill"
}

function onFileChange(event) {
  console.dir(event.target)
  const file = event.target.files[0]; // 선택한 파일 가져오기
  const url = URL.createObjectURL(file); // 선택한 파일을 가리키는 url요청
  const image = new Image(); // <img src="">
  image.src = url;
  image.onload = function () { // 이미지를 불러오는 이벤트 함수
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //img 그리기
    fileInput.value = null; // 또 다른 이미지 추가를 위해 input에 있는 파일 비워주기
  }
  // console.log(url);
}

function onDoubleClick(event) {
  // save와 restore 사이에서는 어떤 수정을 해도 저장 되지 않는다.
  // 변경되는 코드가 실행되기 전에 현재 상태와 선택들을 저장하기 때문에
  const text = textInput.value;
  if (text !== "") { // 텍스트의 값이 비어있지 않다면
    ctx.save(); // ctx의 현재 상태, 색상, 스타일 등 모든 것을 저장.
    ctx.lineWidth = 1;
    ctx.font = "68px sans-serif"
    ctx.fillText(text, event.offsetX, event.offsetY); // 유저가 캔버스에 더블클릭한 그 위치에 텍스트 배치
    // ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.restore(); // 이전에 저장해뒀던 상태로 복구.
  }
  // console.log(event.offsetX, event.offsetY);
}

function onSaveClick() {
  const url = canvas.toDataURL(); // canvas에 그린 그림을 url로 변환 (base64로 인코딩된 url canvas에 그린 그림을 문자열로 표현한 것)
  // 웹사이트로 링크하는 대신 저장된 이미지 url로 링크하는 a태그 생성
  const a = document.createElement('a'); //a 태그 생성해 가짜 링크 만듬
  a.href = url; // 그림 url로 설정
  a.download = "myDrawing.png"; // 다운로드시 myDrawing.png라는 파일명으로 저장시킨다고 설정
  a.click(); //링크를 클릭하면 파일이 다운로드
}

canvas.addEventListener('dblclick', onDoubleClick); // ===  canvas.onmousemove = onMove;
canvas.addEventListener('mousemove', onMove); // ===  canvas.onmousemove = onMove;
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
// 캔버스 밖을 벗어났다가 다시 되돌아 왔을때 계속 그려지는 error 수정
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

// input type="range" 수치값 변경 감지 event
lineWidth.addEventListener('change', onLineWidthChange)
color.addEventListener('change', onColorChange)

// 사용자에게 미리 만들어진 색상 제공
// console.log(colorOptions);
colorOptions.forEach(color => color.addEventListener('click', onColorClick));

// mode 선택 btn event
modeBtn.addEventListener('click', onModeClick);

// 초기화
destroyBtn.addEventListener('click', onDestroyClick);
// 지우개 
eraserBtn.addEventListener('click', onEraserClick);
fileInput.addEventListener('change', onFileChange);
saveBtn.addEventListener('click', onSaveClick);

// 보드를 mousemove할때마다 랜덤한 컬러로 선 그리기
// const colors = [
//   "#81ecec",
//   "#74b9ff",
//   "#00b894",
//   "#0984e3",
//   "#ffeaa7",
//   "#fab1a0",
//   "#fd79a8",
//   "#e17055",
//   "#d63031",
//   "#fdcb6e",
// ];

// function onClick(event) {
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }
// canvas.addEventListener('mousemove', onClick);
