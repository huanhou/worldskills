function show() {
  var navElements = document.getElementsByClassName("nav");
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.display = "block";
  }

  var menuElements = document.getElementsByClassName("menu");
  for (var j = 0; j < menuElements.length; j++) {
    menuElements[j].style.display = "none";
  }
}

function hide() {
  var menuElements = document.getElementsByClassName("menu");
  for (var i = 0; i < menuElements.length; i++) {
    menuElements[i].style.display = "block";
  }

  var navElements = document.getElementsByClassName("nav");
  for (var j = 0; j < navElements.length; j++) {
    navElements[j].style.display = "none";
  }
}
