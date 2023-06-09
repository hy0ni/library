const $clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  $clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


// padStart() 메서드
// 현재 문자열의 시작을 다른 문자열로 채워 주어진 길이에 만족하는 새로운 문자열을 반환한다. 채워넣기는 대상 문자열의(좌측)부터 적용된다.

// String.prototype.padStart()
// date.getSeconds().padStart(2,"0")
// date.getSeconds()를 호출할 경우 0~9까지 홀수로 표시되는데
// .padStart(2,"0") 메서드를 사용하면 string의 길이가 2자리가 될때까지 문자열 앞에 0를 채워 넣어주며 01~09까지 짝수로 출력이 된다.

// 이 문자열은 2글자가 되어야하고 그렇지 않다면 앞쪽에 0을 추가해라.


// date.getHours()에는 padStart() 사용이 불가하데 그 이유는 숫자이기 때문이다. 그러므로 date.getHours()를 string으로 변환 후 사용해야한다.
// String(date.getHours()).padStart()
// .padStart(string이 가져야 하는 길이 설정, 그렇지 않다면 string의 앞쪽에 채울 string 설정)

// "hello".padStart(20,"x")
// 'xxxxxxxxxxxxxxxhello'
// "hello"라는 문자열에 길이가 20이 되어야하는 string을 만들어라 그렇지 않다면 "x"이 문자열로 채워서 원하는 길이로 만들어 줘
