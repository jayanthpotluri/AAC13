function toggleMenu() {
    var menuBox = document.getElementById('mobmenu');    
    if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "block";
    }
    var Box = document.getElementById('blackbox');    
    if(Box.style.display == "block") { // if is menuBox displayed, hide it
      Box.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      Box.style.display = "block";
    }
  }