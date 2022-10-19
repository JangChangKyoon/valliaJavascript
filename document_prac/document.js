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

//----------------------------

//개선2 : toggle 사용
function handleTitleClick() {
  h1.classList.toggle('clicked');
}

h1.addEventListener('click', handleTitleClick);
