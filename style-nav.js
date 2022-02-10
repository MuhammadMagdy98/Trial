import {myFunc} from './test.js';

let settings = document.getElementById('settings');
let invisible = true;

settings.addEventListener('mouseover', function(event) {
  
  event.target.setAttribute('src', './settings-hover-removebg-preview.png')
});

settings.addEventListener('click', function(event) {
  invisible = !invisible;
  let popUp = document.getElementById('settings-pop-up');
  let popUpState = "visible";
  if (invisible) {
    popUpState = "hidden";
  }
  popUp.style.visibility = popUpState;
  
});

settings.addEventListener('mouseleave', function(event) {
  
  event.target.setAttribute('src', './settings.png')
});

// disable image dragging
settings.ondragstart = () => {return false};

