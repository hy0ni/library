(() => {

  const actions = {
    birdFlies(key) {
      if (key) { //key === true
        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
      } else { // key === false
        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
      }
    },
    birdFlies2(key) {
      if (key) { //key === true
        document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`;
      } else { // key === false
        document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
      }
    }
  }

  const $stepElems = document.querySelectorAll('.step');
  const $graphicElems = document.querySelectorAll('.graphic-item');
  let currentItem = $graphicElems[0]; //현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1; // 현재 IntersectionObserver에 의해 체크된 target( $stepElems)의 data-index (곱하기 1을 하면 number type으로 변환된다.)
    // console.log(typeof (entries[0].target.dataset.index));
    // console.log(typeof (entries[0].target.dataset.index * 1));
    // console.log(ioIndex);
  });

  for (let i = 0; i < $stepElems.length; i++) {
    io.observe($stepElems[i]); // 관찰 대상 등록
    // $stepElems[i].setAttribute('data-index', i);
    $stepElems[i].dataset.index = i;
    $graphicElems[i].dataset.index = i;
  }

  function activate(action) { // 활성화
    currentItem.classList.add('visible');
    if (action) {
      actions[action](true); //actions의 birdFlies메서드를 ()호출한다
    }
  }
  function inactivate(action) { // 비활성화
    currentItem.classList.remove('visible');
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener('scroll', () => {
    let step;
    let boundingRect;
    // let temp = 0;

    // for (let i = 0; i < $stepElems.length; i++) {
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) { //ioIndex -1 (현재의 인덱스의 바로 전)
      step = $stepElems[i];
      if (!step) continue; // 만약에 step에 값이 없다면 pass~
      boundingRect = step.getBoundingClientRect();
      // console.log(boundingRect.top);

      // temp++;// 루프 횟수 체크

      // 눈에 보이는 아이템의 위치만 체크
      // 범위 설정 boundingRect.top이 윈도우의 창 높이 기준 10%~80% 사이에 들어오면 
      if (boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8) {
        // console.log(step.dataset.index);

        inactivate(currentItem.dataset.action); // 비활성화
        currentItem = $graphicElems[step.dataset.index];
        activate(currentItem.dataset.action); // 활성화

      }
    }
    // console.log(temp); // 루프 횟수 체크
  });

  window.addEventListener('load', () => {
    // 새로고침시 화면 상단으로 이동
    setTimeout(() => scrollTo(0, 0), 100); //scrollTo(x,y)
  })

  activate(); // 첫 화면에서 .graphic-item[0] 보여주기

})(); //전역변수 사용을 방지하기 위해 즉시 실행 익명함수 사용