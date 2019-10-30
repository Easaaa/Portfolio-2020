const aboutBtn = document.querySelector('.about__nav');
const skillsBtn = document.querySelector('.skills__nav');
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');
const languages = document.querySelector('.languages');
const btnLang = document.querySelector('.btn-lang');
const email = document.querySelector('.email p');

// MIDDLE BANNER LOGIC
function toggleNav() {
  if (skillsSection.classList.contains('hide')) {
    skillsSection.classList.toggle('hide');
    aboutSection.classList.toggle('hide');
  } else {
    skillsSection.classList.toggle('hide');
    aboutSection.classList.toggle('hide');
  }
}

// Show email on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    email.style.display = 'inline';
  } else {
    email.style.display = 'none';
  }
});

// LANGUAGES

function showLang(e) {
  languages.style.top = '15px';
  this.removeEventListener('click', showLang);
  btnLang.onclick = hideLang;
}

function hideLang() {
  languages.style.top = '-40px';
  btnLang.onclick = showLang;
}

btnLang.addEventListener('click', showLang);

// HAMBURGER MOBILE NAV
function toggleHamb() {
  if ((hambButton.style.display = 'inline')) {
    navbar.classList.toggle('show');
    iconWorld.style.display = 'none';
    languages.style.visibility = 'visible';
  }
}

hambButton.addEventListener('click', toggleHamb);

// VIDEO BUTTON
