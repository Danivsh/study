var myIamge = document.querySelector('img')

myIamge.onclick = function() {
    var mySrc = myIamge.getAttribute('src');
    if(mySrc === 'images/logo-chef.ico') {
        myIamge.setAttribute('src','images/cheef-two.ico');
    } else {
        myIamge.setAttribute ('src', 'images/logo-chef.ico');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName() {
    var myName = prompt('Пожалуйста введите ваше имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Привет, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}  
