const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('actived')
      })
      tabs.forEach(tab => {
        tab.classList.remove('actived')
      })
      tab.classList.add('actived')
    })
  })

  function showPass() {
    var x = document.getElementById("login-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }  

  function showPassText() {
    var x = document.getElementById("login-password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showpass").checked = true;
    } else {
      x.type = "password";
      document.getElementById("showpass").checked = false;
    }
  } 