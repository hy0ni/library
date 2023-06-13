// user의 위치
// 날씨
// https://openweathermap.org/current
// https://localhost:

// const API_KEY = "myAPIKEY";

function onGeoOk(position) { // 위치를 가져오는데 성공
  const lat = position.coords.latitude;//위도 // position.coords공통
  const lon = position.coords.longitude;//경도 // position.coords공통
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log("You live in", lat, lon);
  // console.log(position)
  // console.log(url);
  fetch(url).then(response => response.json())
    .then((data) => {
      const $weather = document.querySelector('#weather span:first-child');
      const $city = document.querySelector('#weather span:last-child');
      $city.innerText = data.name;
      $weather.innerText = `weather: ${data.weather[0].main}\n ${data.main.temp}℃`;
    });
}
function onGeoError() { // 위치를 가져오는데 실패
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



/*
Geolocation.getCurrentPosition()메서드는 장치의 현재 위치를 가져오는 데 사용
success 함수는 Geolocation.getCurrentPosition object 하나를 입력 받는다.
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
*/

