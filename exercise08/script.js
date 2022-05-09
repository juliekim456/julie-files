
let grayBtn = document.getElementById("grayButton");
let whiteBtn = document.getElementById("whiteButton");
let blueBtn = document.getElementById("blueButton");
let yellowBtn = document.getElementById("yellowButton");


function switchToGray(){
  let body = document.querySelector('body');
  body.style.backgroundColor = 'gray';
  body.style.color = 'black';
}
function switchToWhite(){
  let body = document.querySelector('body');
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
}
function switchToBlue(){
  let body = document.querySelector('body');
  body.style.backgroundColor = 'blue';
  body.style.color = 'white';
}
function switchToYellow(){
  let body = document.querySelector('body');
  body.style.backgroundColor = 'yellow';
  body.style.color = 'black';
}


grayBtn.addEventListener('click', switchToGray)
whiteBtn.addEventListener('click', switchToWhite)
blueBtn.addEventListener('click', switchToBlue)
yellowBtn.addEventListener('click', switchToYellow)