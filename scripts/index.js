
let inactiveIcon = document.getElementById("share-icon-div-1");
let activeIcon = document.getElementById("share-icon-div-2");

let inactiveBlock = document.getElementById("wrapper-inactive");
let activeBlock = document.getElementById("wrapper-active-mobile");

let isActive = false;

function makeInactive() {
  activeBlock.style.display = "none";
  inactiveBlock.style.display = "block";
}

function makeActive() {
  inactiveBlock.style.display = "none";
  activeBlock.style.display = "block";
}

function display() {
  if (isActive == false) {
    activeBlock.style.opacity = "0";
    inactiveBlock.style.opacity = "1";
    setTimeout(makeInactive, 750);
  } 
  else {
    inactiveBlock.style.opacity = "0";
    activeBlock.style.opacity = "1";
    setTimeout(makeActive, 750);
  }
}






