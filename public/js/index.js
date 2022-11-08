function toggleMenu() {
  var menuBox = document.getElementById("mobmenu");
  // var Body = document.getElementsByTagName("body");
  if (menuBox.style.display == "block") {
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  } else {
    // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
  var Box = document.getElementById("blackbox");
  if (Box.style.display == "block") {
    // if is menuBox displayed, hide it
    Box.style.display = "none";
    document.body.style.overflow = "scroll";
  } else {
    // if is menuBox hidden, display it
    Box.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("hospname");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("name")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
document.getElementById('showpass').onclick = function() {
  if ( this.checked ) {
     document.getElementById('login-password').type = "text";
  } else {
     document.getElementById('login-password').type = "password";
  }
};
