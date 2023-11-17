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


let votosSi = 0;
let votosNo = 0;

function votar(opcion) {
  if (opcion === 'si') {
    votosSi++;
  } else if (opcion === 'no') {
    votosNo++;
  }

  actualizarResultados();
}

function actualizarResultados() {
  document.getElementById('votos-si').innerText = votosSi;
  document.getElementById('votos-no').innerText = votosNo;
}

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
});


showSlide(slideIndex);
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);
