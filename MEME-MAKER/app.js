const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

// 보드를 mousemove할때마다 랜덤한 컬러로 선 그리기
const colors = [
  "#81ecec",
  "#74b9ff",
  "#00b894",
  "#0984e3",
  "#ffeaa7",
  "#fab1a0",
  "#fd79a8",
  "#e17055",
  "#d63031",
  "#fdcb6e",
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}
canvas.addEventListener('mousemove', onClick);
