$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
});

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}

if(sessionStorage.getItem("loadAnim") == "true"){
    document.getElementById("loader").style.display = "none";
  }else{
    document.getElementById("loader").style.display = "grid";
  }

  window.addEventListener("load", () => {
    sessionStorage.setItem("loadAnim", "true");
  })
