//Selector Variable 변수
const clock = document.querySelector("h2#clock");

//--------------------------------------------------
//functions time prac
function sayHello() {
  console.log("setInterval");
}

//5초(5000ms)마다 console에 호출
setInterval(sayHello, 5000);

//5초(5000ms)후에 console에 호출
setTimeout(sayHello, 5000);

//functions time
function getClock() {
  const date = new Date();
  // 숫자를 02 -> 이런식으로 바꾸기 : by "padStart"
  //clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

//1초(1000ms)마다 console에 호출
setInterval(getClock, 1000);
