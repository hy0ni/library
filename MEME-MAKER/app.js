const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;

function onMove(event) { // 유저가 마우스를 움직이고 
  if (isPainting) {
    // true라면 stroke를 사용하여 선을 그리고 함수를 종료.
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  // false라면 브러쉬만 움직인다.
  ctx.moveTo(event.offsetX, event.offsetY); //마우스가 있는 곳으로 브러쉬를 움직인다.
}
function startPainting() { // isPainting = true;라면 그리고
  isPainting = true;
}
function cancelPainting() {
  isPainting = false; // isPainting = false;라면 움직이고

}
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
// 캔버스 밖을 벗어났다가 다시 되돌아 왔을때 계속 그려지는 error 수정
canvas.addEventListener('mouseleave', cancelPainting);
// document.addEventListener('mouseup', cancelPainting);




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
