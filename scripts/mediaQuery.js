const mediaQuery = window.matchMedia("(min-width: 768px)")

let activeDesktop = document.getElementById("wrapper-active-desktop");
let destopShare = document.getElementById("share");

function desktopDisplay() {
  if (isActive == false) {
    activeDesktop.style.opacity = "1";
    destopShare.setAttribute("style", "fill: #FFF;");
    inactiveIcon.style.backgroundColor = "hsl(214, 17%, 51%)";
  } 
  else {
    activeDesktop.style.opacity = "0";
    destopShare.setAttribute("style", "fill: hsl(214, 17%, 51%);");
    inactiveIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
  } 
}

function myFunction(mediaQuery) {
  if (mediaQuery.matches) { // If media query matches
    inactiveIcon.onclick = function() {
      activeDesktop.style.transition = "all 0.5s";
      desktopDisplay();
      isActive  = (isActive == false) ? true : false;
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





