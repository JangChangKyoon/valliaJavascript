//Selector Variable 변수
const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');
//--------------------------------------------------------------------

// Variable(css연동하여 display:none)
const HIDDEN_CLASSNAME = 'hidden';

//버튼 클릭 기능 함수
function onLoginSubmit(event) {
  // 브라우저가 기본 동작을 실행하지 못하게 막기
  // event object는 preventDefault함수를 기본적으로 갖고 있음
  event.preventDefault();
  //make variable with a value
  const username = loginInput.value;

  //html loginForm에 클래스이름 추가하기
  loginForm.classList.add(HIDDEN_CLASSNAME);

  //greeting 텍스트 브라우저 표시할 문자 지정 : username 변수 가져오기
  greeting.innerHTML = `${username}`;
  //greeting 숨김 해제하기
  greeting.classList.remove(HIDDEN_CLASSNAME);

  //브라우저에 데이터 저장 : localstorage 이용
  //localStorage 위치 : 브라우저-application-localstorage
  localStorage.setItem('username', username);

  //브라우저에 데이터 불러오기/지우기
  //localStorage.getItem("username");
  //localStorage.removeItem("username");
}

//--------------------------------------------------------------

//실행 코드
// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 // JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들
loginForm.addEventListener('submit', onLoginSubmit);

// ★ 중요 ★
// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
// 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다.
// 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
// JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다.
// ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음

// -------------------------------------------------------------------
