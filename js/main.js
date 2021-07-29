"use strict";

window.addEventListener('load', function () {
  // ANIMATIONS
  setTimeout(function () {
    document.querySelector('.first-section .bg-layer').style.top = '-100%';
    document.querySelector('.first-section').classList.remove('animated');
  }, 3000);
  setTimeout(function () {
    document.querySelector('.first-section .text-content h2 .layer').style.left = '-250%';
  }, 4300);
  setTimeout(function () {
    document.querySelector('.first-section .text-content h2 .text').style.opacity = '1';
  }, 4450);
  setTimeout(function () {
    document.querySelector('.first-section .text-content h3').style.opacity = '1';
  }, 5000);
  setTimeout(function () {
    document.querySelector('.first-section .arrow-block').style.opacity = '1';
  }, 5400); // ACTIVATE FORM

  var orderActivBtn = document.querySelectorAll('.activate-order');
  var vacancyActivBtn = document.querySelectorAll('.activate-vacancy');
  var unsetActives = document.querySelectorAll('.unset-actives');
  var orderRegisterForm = document.querySelector('.order-register');
  var vacancyRegisterForm = document.querySelector('.vacancy-register');
  orderActivBtn.forEach(function (btn) {
    btn.addEventListener('click', activeOrderForm);
  });
  vacancyActivBtn.forEach(function (btn) {
    btn.addEventListener('click', activeVacancyForm);
  });
  unsetActives.forEach(function (btn) {
    btn.addEventListener('click', unsetFormActives);
  });

  function activeOrderForm() {
    if (orderRegisterForm.classList.contains('active')) {
      orderRegisterForm.classList.remove('active');
      orderRegisterForm.classList.add('active');
      document.querySelector('body').classList.add('hidden');
      return;
    }

    orderRegisterForm.classList.add('active');
    document.querySelector('body').classList.add('hidden');
  }

  function activeVacancyForm() {
    if (vacancyRegisterForm.classList.contains('active')) {
      vacancyRegisterForm.classList.remove('active');
      vacancyRegisterForm.classList.add('active');
      document.querySelector('body').classList.add('hidden');
      return;
    }

    vacancyRegisterForm.classList.add('active');
    document.querySelector('body').classList.add('hidden');
  }

  function unsetFormActives() {
    vacancyRegisterForm.classList.remove('active');
    orderRegisterForm.classList.remove('active');
    document.querySelector('body').classList.remove('hidden');
  } // NAVIGATION SCRIPTS


  var navLinks = document.querySelectorAll('.nav-link');
  var navigation = document.querySelector('.header');

  if (navLinks.length > 0) {
    navLinks.forEach(function (btn) {
      return btn.addEventListener('click', function (e) {
        e.preventDefault();
        var sectionId = btn.getAttribute('href');
        var sectionPossition = document.querySelector(sectionId).offsetTop;
        var navHeight = navigation.clientHeight;
        scrollTo({
          left: 0,
          top: sectionPossition - navHeight,
          behavior: 'smooth'
        });
        console.log(navHeight);
      });
    });
  } // TO TOP BTN


  var toTopBtn = document.querySelector('#to-top');
  toTopBtn.addEventListener('click', toTop);

  function toTop() {
    var scrolled = window.pageYOffset;

    if (scrolled > 0) {
      scrolled -= 50;
      scrollTo(0, scrolled);
      setTimeout(toTop, 10);
    }
  }

  window.addEventListener('scroll', function () {
    if (pageYOffset > 1000) {
      toTopBtn.style.transform = 'scale(1)';
    } else {
      toTopBtn.style.transform = 'scale(0)';
    }
  }); // NAV BURGER

  var burger = document.querySelector('.header .burger');
  var navMenu = document.querySelector('.header .menu');
  burger.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    burger.classList.toggle('open');
  });
});