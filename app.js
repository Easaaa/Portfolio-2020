const aboutBtn = document.querySelector('.about-nav');
const skillsBtn = document.querySelector('.skills-nav');
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');
const hambButton = document.querySelector('.hamburger');
const navbar = document.querySelector('nav');
const languages = document.querySelector('.all-lang');
const iconWorld = document.querySelector('.icon-lang');

// MIDDLE BANNER LOGIC
function toggleNav() {
  if (skillsSection.classList.contains('hide')) {
    aboutSection.style.opacity = '0';
    skillsSection.style.opacity = '1';
    skillsSection.classList.toggle('hide');
    aboutSection.classList.toggle('hide');
  } else {
    skillsSection.classList.toggle('hide');
    aboutSection.classList.toggle('hide');
    skillsSection.style.opacity = '0';
    aboutSection.style.opacity = '1';
  }
}

// Hide hamburger on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    hambButton.style.display = 'none';
  } else {
    hambButton.style.display = 'inline';
  }
});

// LANGUAGES
languages.style.visibility = 'hidden';
function showHideLang() {
  if (languages.style.visibility === 'hidden') {
    languages.style.visibility = 'visible';
  } else {
    languages.style.visibility = 'hidden';
  }
}

iconWorld.addEventListener('click', showHideLang);

// HAMBURGER MOBILE NAV
function toggleHamb() {
  if ((hambButton.style.display = 'inline')) {
    navbar.classList.toggle('show');
    iconWorld.style.display = 'none';
    languages.style.visibility = 'visible';
  }
}

hambButton.addEventListener('click', toggleHamb);
