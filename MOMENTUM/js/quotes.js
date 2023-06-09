// 랜덤 명언
const quotes = [
  {
    quote: "애초에 디버깅은 코드를 작성하는 것 보다 배나 힘들다. 그러니, 코드를 최대한 빈틈없이 작성하는 사람은, 당연히, 디버그할 정도로 똑똑하지 않은 것이다.",
    author: " 브라이언 커니핸(Brian W. Kernighan)",
  },
  {
    quote: "월요일에 작성한 코드를 디버깅하느라 그 주의 나머지를 허비하느니 월요일에 침대 안에 머무는게 나을 때도 있다.",
    author: "크리스토퍼 톰프슨(Christopher Thompson)",
  },
  {
    quote: "프로그래밍은 자기 얼굴을 차는 것과 같아서, 조만간 코피가 날 것이다.",
    author: "카일 우드버리(Kyle Woodbury)",
  },
  {
    quote: "리스프는 언어가 아닌, 건축 자재이다.",
    author: "앨런 케이(Alan Kay)",
  },
  {
    quote: "그들은 이제 버니같은 버그는 만들지 않는다.",
    author: "Olav Mjelde.",
  },
  {
    quote: "프로그래밍 언어로 작성한 프로그램이 상관 없는 것에 주의해야 한다면 그 언어는  하위 언어이다.",
    author: "앨런 펄리스(Alan J. Perlis)",
  },
  {
    quote: "물 위를 걷는 것과 명세서로 소프트웨어를 개발하는 것은 쉽다. 둘 다  동결되었다면…",
    author: "에드워드 V 베라드(Edward V Berard)",
  },
  {
    quote: "올바로 동작하지 않더라도 걱정말아라. 모든 것이 그랬다면, 넌 직업을 잃었을테니까.",
    author: "소프트웨어 공학에서의 모셔의 법칙(Mosher’s Law)",
  },
  {
    quote: "난 마이크로소프트가 유닉스 디랙터리 목록에서 보이지 않게 하려고 .Net이라고 이름을 지었다고 생각한다.",
    author: "Oktal",
  },
  {
    quote: "유일한 진실을 말하자면, 객체 지향 판 ‘스파게티 코드’는, 당연히, ‘라쟈냐 코드’이다. (과하게 많은 계층)",
    author: "로버트 월트만(Roberto Waltman)",
  },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.round() 반올림
// Math.ceil() 올림
// Math.floor() 내림
// console.log(Math.floor(Math.random() * 10))
// console.log(quotes[Math.floor(Math.random() * quotes.length)])