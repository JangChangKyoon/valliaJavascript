//배경 이미지들 변수에 저장하기
const images = ["wooyoungwoo1.jpg", "wooyoungwoo2.jpg", "wooyoungwoo3.jpg"];

//배경 이미지 선택하여 변수에 저장하기
const chosenImage = images[Math.floor(Math.random() * images.length)];

//배경 이미지에 넣은 element 생성하기
const bgImage = document.createElement("img");
//=> <img />

//배경 이미지에 넣은 element 안 내용물 구성하기
bgImage.src = `img/${chosenImage}`;
//=>  <img src="img/chosenImage"/>

document.querySelector(".pic").appendChild(bgImage);
