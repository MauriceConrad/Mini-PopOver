window.addEventListener("load", function() {
  var popovers = document.getElementsByClassName("pop-over");
  for (var i = 0; i < popovers.length; i++) {
    var fChild = popovers[i].children[0];
    var leftColor;
    if (fChild.classList.contains("left")) {
      leftColor = getComputedStyle(fChild).getPropertyValue("background-color");
    }
    if (fChild.classList.contains("center")) {
      leftColor = "#eee";
    }
    fChild.parentNode.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50"><polygon points="12,15 12,35 0,25" style="fill: ' + leftColor + '"/></svg>\')';
  }
  var allButtons = document.querySelectorAll("button[data-popover]");
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function() {
      setPopOver(this, event);
    }, false);
  }
}, false);
function setPopOver(elm, popover, evt) {
  var popOverSelector = elm.getAttribute("data-popover");
  var popOver = document.querySelector(popOverSelector);
  popOver.addEventListener("click", function() {
    window.popOverClick = true;
    setTimeout(function() {
      window.popOverClick = false;
    }, 10);
  }, false);
  popOver.setAttribute("style", "");
  popOver.style.display = "block";
  if (elm.offsetLeft + (elm.offsetWidth / 2) < window.innerWidth / 2) {
    popOver.style.left = (elm.offsetLeft + elm.offsetWidth + 5) + "px";
    popOver.style.removeProperty('background-image');
    popOver.style.removeProperty('background-position');
    popOver.children[0].style.removeProperty('margin-left');
    if (popOver.children[1] != undefined) {
      popOver.children[1].style.removeProperty('margin-left');
    }
    if (popOver.children[2] != undefined) {
      popOver.children[2].style.removeProperty('margin-right');
    }
    if (popOver.children[0].classList.contains("left") == true) {
      var bgColor = popOver.children[0].style.backgroundColor;
      popOver.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50"><polygon points="12,15 12,35 0,25" style="fill: ' + bgColor + '"/></svg>\')';
    }
  }
  else {
    popOver.children[0].style.marginLeft = "0px";
    if (popOver.children[0].classList.contains("left")) {
      if (popOver.children[2] != undefined && popOver.children[2].classList.contains("right")) {
        popOver.children[2].style.marginRight = "10px";
      }
      if (popOver.children[1].classList.contains("center") && popOver.children[2] == undefined) {
        popOver.children[1].style.marginLeft = "0px";
        popOver.children[0].style.marginLeft = "5px";
      }
    }
    if (popOver.children[0].classList.contains("center")) {
      if (popOver.children[1] != undefined && popOver.children[1].classList.contains("right")) {
        popOver.children[1].style.marginRight = "10px";
      }
      if (popOver.children[1] == undefined) {
        popOver.children[0].style.marginLeft = "-10px";
      }
    }
    popOver.style.backgroundPosition = "calc(100% - 10px) 2px";
    popOver.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50"><polygon points="0,15 0,35 12,25" style="fill: ' + '#eee' + '"/></svg>\')';
    popOver.style.left = (elm.offsetLeft - popOver.offsetWidth - 5) + "px";
  }
  popOver.style.top = ((elm.offsetTop + (elm.offsetHeight / 2)) - (popOver.offsetHeight / 2)) + "px";
  popOver.style.animation = 'showPopOver .3s';
}
window.addEventListener("click", function() {
  if (window.popOverClick != true && event.target.getAttribute("data-popover") == undefined) {
    var allPopOvers = document.getElementsByClassName("pop-over");
    for (var i = 0; i < allPopOvers.length; i++) {
      allPopOvers[i].style.display = "none";
    }
  }
}, false);
