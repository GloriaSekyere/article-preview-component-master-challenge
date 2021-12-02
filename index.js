let inactiveIcon = document.getElementById("share-icon-div-1");
let activeIcon = document.getElementById("share-icon-div-2");

let inactiveBlock = document.getElementById("wrapper-inactive");
let activeBlock = document.getElementById("wrapper-active");

let isActive = false;

(function transition() {
  inactiveBlock.style.transition = "all 1s";
  activeBlock.style.transition = "all 1s";
})();

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

inactiveIcon.onclick = function() {
  isActive = true;
  display();
}

activeIcon.onclick = function() {
  isActive = false;
  display();
}



