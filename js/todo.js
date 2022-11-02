//Selector Variable 변수
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "todos"; // localStorage 키
let toDos = [];

//function
function handleToDoSubmit(event) {
  event.preventDefault();
  //load input value
  const newTodo = toDoInput.value;
  //input value to be emptied
  toDoInput.value = "";

  //make a obj to delete todo for identifying content by id
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  //push the new todo in array for saving
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function saveToDos() {
  // localStorage.setItem('todos', JSON.stringify(toDos));
  // 저장방식 : setItem(키, 값) // 값이 object형식으로 저장하는 것임.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // string data type 으로 저장이 되요. (예: "[a,b,c,d,e]")
}
// json.stringify 함수를 쓰나 했는데 나중에 json.parse 함수를 쓰더라구요
// (STRINGIFY = 변수 등을 문자열로 바꿈,PARSE = 문자열을 JSON으로 바꿈)
// localstorage 에서는 문자열밖에 저장할 수 있기 때문에
// stringify로 Array 자체를 문자열로 만들고 (["뭐시기","저시기"] ==> "["뭐시기","저시기"]")
// 나중에 localstorage에서 가지고 온 다음 parse로 문자열을 Array 로 만들어서
// 불러들이는 걸로 하는거 같아요

//
function deleteToDo(event) {
  //event : 테그 정보를 알려주는 것
  //target : button을 클릭하는 대상을 나타냄
  console.log(event.target.parentElement);
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();

  //fillter로 아이디를 기준으로 삭제하는 방식
  // 선택된 li.id가 아닌 것만 필터로 걸러서 배열에 저장됨.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  //create element variable
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  //text 지정하기
  span.innerText = newTodo.text;
  // 이모지 : 윈도우 + .
  button.innerText = "❌";
  // make li parent of span
  li.appendChild(span);
  li.appendChild(button);
  // 삭제를 위한 태그에 id에 번호 부여하기
  li.id = newTodo.id;

  // li를 html에 삽입
  toDoList.appendChild(li);
  // toDoList.appendChild(button);

  button.addEventListener("click", deleteToDo);
}

// addEventListener
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //  "[a,b,c,d,e]" -> [a, b, c, d] (array);
  // parsedToDos.forEach((item) => console.log('this is the turn of', item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
