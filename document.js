//--------------------------------------------------
//마우스 클릭 이벤트 설정
const h1 = document.querySelector('div.hello h1'); //대상 선택
console.log(h1);

function handleTitleClick() {
  console.log('title was clicked');
  document.querySelector('h1.hell').style.color = 'red';
}

document.querySelector('h1.hell').addEventListener('click', handleTitleClick);
//=title.onclick = handleTitleClick;
//=b2.addEventListener('click', handleTitleClick);
// title.onmouseenter = handleMouseEnter;

function handleMouseEnter() {
  h1.innerText = 'Mouse is here';
}

//------------------------------------------------------

//hovering 시 텍스트 변경
function handleMouseLeave() {
  h1.innerText = 'Mouse is gone';
}

h1.addEventListener('mouseenter', handleMouseEnter);
//=b2.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);
// b2.addEventListener('mouseleave', handleMouseLeave);

// handleTitleClick();

//-------------------------------------
//창크기를 변경할 때마다 배경색이 달라짐
function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

window.addEventListener('resize', handleWindowResize);

//---------------------------------------
//복사했을 때 이벤트
function handleWindowCopy() {
  alert('copier');
}
window.addEventListener('copy', handleWindowCopy);

// - getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
// - getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// - querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
// 단 하나의 element를 return해줌
// ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
// - 첫번째 element만 가져옴
// - 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
// ⇒ 세개의 h1이 들어있는 array를 가져다 줌
// - querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
// 하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다

// listen하고 싶은 event 찾는 방법!
// 1. 구글에 찾고 싶은 element의 이름 검색하기 ex) h1 html element mdn(mozilla developer network)
// 2. 그 중에서 web APIs 이 포함된 페이지 찾기 (JS 관점의 HTML heading element란 의미)

// console.dir을 통해서 element를 console에 출력시키기 console.dir(title);=> 여기서도 사용가능한 event 찾을 수 있다. property 이름 앞에 on 이 있다면 그게 바로 event listener!!!! 사용할때는 on 빼고 쓰기

// style은 CSS를 통해서 변경되어야 한다.

//-------------------------------------------------------------------------

const h1 = document.querySelector('div.hello h1'); //대상 선택
//개선2 : toggle 사용
function handleTitleClick() {
  h1.classList.toggle('clicked');
}
h1.addEventListener('click', handleTitleClick);

//css 동시 사용시
// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }
//   h1.style.color = newColor;
// }

//css 분리 사용시
// function handleTitleClick() {
//     //className을 설정하는 것으로 글자색 설정
//     //생바꿈은 css파일에 설정
//     const clickedClass = 'clicked sexy-font';
//     if (h1.className === clickedClass) {
//       h1.className = '';
//     } else {
//       h1.className = clickedClass;
//     }
//   }

//개선1 : classList 사용
// function handleTitleClick() {
//   const clickedClass = 'clicked';
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

//개선2 : toggle 사용
// function handleTitleClick() {
//   h1.classList.toggle('clicked');
// }

// h1.addEventListener('click', handleTitleClick);

// js에서 event 이용하기
// 1) element를 찾기
// 2) event를 listen
// 3) event에 반응하기(보여주거나 감추거나 클릭하는것) -함수 안

// classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
// className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

//classList를 이용하는건
// js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것이다.
// = element의 class내용물을 조작하는 것을 허용한다는 뜻

// contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

// toggle은 토큰이 존재하면 토큰제거
// 토큰존재 하지않으면 토큰 추가

// ex)
// toggle은 h1의 classList에 clicked class가 이미있는지 확인하여
// 만약있다면 toggle 이 clicked를 제거해준다
// 만약 class name이 존재하지 않는다면 toggle은 classname 추가
