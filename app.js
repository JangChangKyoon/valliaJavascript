//selector 변수
const loginInput = document.querySelector('div#login-form input');
const loginButton = document.querySelector('div#login-form button');

//버튼 클릭 기능 함수
function onLoginBtnClick() {
  //make variable with a value
  const username = loginInput.value;
  console.log('hello', username);
}

//실행 코드
loginButton.addEventListener('click', onLoginBtnClick);
// --------------------------------------------
