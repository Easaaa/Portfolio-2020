// SCROLL EFFECT NAVBAR
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
   });
});

$(function() {
// Smooth Scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname ==     this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});
});


// EFFECT PAGE

window.sr = ScrollReveal();
sr.reveal('.navbar', {
duration: 3600,
origin: 'left'
});
window.sr = ScrollReveal();
sr.reveal('.masterH', {
duration: 2000,
origin: 'top',
distance: '300px'
});
window.sr = ScrollReveal();
sr.reveal('.scrollH', {
delay: 1300,
duration: 2000,
origin: 'top',
distance: '300px'
});
window.sr = ScrollReveal();
sr.reveal('#about', {
duration: 2000,
origin: 'bottom',
distance: '300px',
viewFactor: 0.2
});
sr.reveal('#services', {
duration: 2000,
origin: 'bottom',
distance: '300px',
viewFactor: 0.2
});
sr.reveal('.infoL', {
duration: 2000,
origin: 'left',
distance: '150px',
viewFactor: 0.2
});
sr.reveal('.infoR', {
duration: 2000,
origin: 'right',
distance: '150px',
viewFactor: 0.2
});
sr.reveal('#portfolio', {
duration: 2000,
origin: 'bottom',
distance: '150px',
viewFactor: 0.2
});