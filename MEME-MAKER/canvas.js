
/*
// 사람 그리기
{
  ctx.fillRect(210 - 40, 200 - 30, 15, 100)
ctx.fillRect(350 - 40, 200 - 30, 15, 100)
ctx.fillRect(260 - 40, 200 - 30, 60, 200)

ctx.arc(250, 100, 50, 0, 2 * Math.PI) // arc(x,y,starting angle(원의시작점),ending angle(원의끝지점))
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();
}
*/

/*
//house 그리기
{
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2; // stroke 두께
// ctx.strokeRect(300, 300, 50, 100);
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
}
*/

/*
{
  ctx.moveTo(50, 50); // (x,y) moveTo 선을 긋지 않으면서 연필을 종이의 다른 부분으로 움직인다.
  ctx.lineTo(150, 50); // (x,y) lineTo 선을 그으면서 연필을 종이의 다른 부분으로 움직인다.
  ctx.lineTo(150, 150);
  ctx.lineTo(50, 150);
  ctx.lineTo(50, 50);
  ctx.fill(); //strok();
}
*/

/*
{
  // 선들을 그리고
ctx.rect(50, 50, 100, 100); //rect(x,y,w,h)
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill(); // 색을 채움 

ctx.beginPath(); // 새 경로 만듬
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill(); // 색을 채움 
// setTimeout(() => { ctx.fill(); }, 500);
}
*/