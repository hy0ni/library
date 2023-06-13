const colorOptions = Array.from(document.getElementsByClassName('color-option')); //배열로 변경
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

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

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
// 캔버스 밖을 벗어났다가 다시 되돌아 왔을때 계속 그려지는 error 수정
canvas.addEventListener('mouseleave', cancelPainting);


// input type="range" 수치값 변경 event
lineWidth.addEventListener('change', onLineWidthChange)
color.addEventListener('change', onColorChange)

// 사용자에게 미리 만들어진 색상 제공
// console.log(colorOptions);
colorOptions.forEach(color => color.addEventListener('click', onColorClick));



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
