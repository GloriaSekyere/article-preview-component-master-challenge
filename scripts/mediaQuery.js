const mediaQuery = window.matchMedia("(min-width: 768px)")

let activeDesktop = document.getElementById("wrapper-active-desktop");

function desktopDisplay() {
  if (isActive == false) {
    activeDesktop.style.visibility = "visible";
    activeDesktop.style.opacity = "1";
  } 
  else {
    activeDesktop.style.opacity = "0";
    activeDesktop.style.visibility = "hidden";
  } 
}

function myFunction(mediaQuery) {
  if (mediaQuery.matches) { // If media query matches
    inactiveIcon.onclick = function() {
      isActive  = (isActive == false) ? true : false;
      activeDesktop.style.transition = "all 0.5s";
      desktopDisplay();
    }
  } 
  else {
    inactiveIcon.onclick = function() {
      isActive = true;
      inactiveBlock.style.transition = "all 1s";
      display();
    }
    activeIcon.onclick = function() {
      isActive = false;
      activeBlock.style.transition = "all 1s";
      display();
    }
  }
}



mediaQuery.addListener(myFunction) // Attach listener function on state changes
myFunction(mediaQuery) // Call listener function at run time





