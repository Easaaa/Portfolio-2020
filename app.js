const aboutBtn = document.querySelector('.about-nav');
const skillsBtn = document.querySelector('.skills-nav');
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');

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

const hambButton = document.querySelector('.hamburger');
const navbar = document.querySelector('nav');

function toggleHamb() {
  if ((hambButton.style.display = 'inline')) {
    navbar.classList.toggle('show');
  }
}

hambButton.addEventListener('click', toggleHamb);
