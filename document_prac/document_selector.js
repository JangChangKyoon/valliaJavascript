// 조작한 대상 선택하는 법

const title = document.getElementById('title');

//find element
console.dir(title);

//chang element
title.innerText = 'change title';

console.log(title.innerText);

//많은 element를 가져올때
const hellos = document.getElementsByClassName('hello');
console.log(hellos);

const a = document.getElementsByTagName('h1');
console.log(a);

//element를 CSS selector방식으로 검색 :  search only first 1
const b = document.querySelector('.hello h1'); //class 하나 선택
console.log(b);

const b1 = document.querySelector('.hello h1:first-child');
console.log(b1);

const bs = document.querySelectorAll('.hello h1'); //class 모두 선택
console.log(bs);

const bId = document.querySelector('#title'); // id의 선택
//=const title = document.getElementById('title');
console.log(bId);
