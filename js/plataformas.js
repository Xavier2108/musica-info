const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener(("click"), () => {
    nav.classList.remove("visible");

})

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var btn = document.getElementById("btnScrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

document.getElementById("btnScrollToTop").addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.getElementById('spotify').addEventListener('click', function() {

  var nuevaVentana = window.open("https://open.spotify.com/", "_blank");
  nuevaVentana.focus();
});

document.getElementById('ytm').addEventListener('click', function() {
 
  var nuevaVentana = window.open("https://music.youtube.com", "_blank");
  nuevaVentana.focus();
});

document.getElementById('am').addEventListener('click', function() {

  var nuevaVentana = window.open("https://music.amazon.com.mx", "_blank");
  nuevaVentana.focus();
});

document.getElementById('im').addEventListener('click', function() {

  var nuevaVentana = window.open("https://music.apple.com/mx/browse", "_blank");
  nuevaVentana.focus();
});
