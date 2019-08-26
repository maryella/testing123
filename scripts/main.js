
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shrug.png') {
      myImage.setAttribute ('src','images/shrug.png');
    } else {
      myImage.setAttribute ('src','images/speech_bubble.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the lab, ' + myName + '!';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the lab, ' + storedName + '!';
  }
  myButton.onclick = function() {
    setUserName();
  }