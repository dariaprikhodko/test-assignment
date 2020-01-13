'use strict';

(function () {
  var navTab = document.querySelectorAll('.nav-list__item');
  var navList = document.querySelector('.nav-list');
  var tabContent = document.querySelectorAll('.tabContent');

  // переключение табов
  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      navTab[i].classList.remove('current');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      navTab[b].classList.add('current');
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  navList.addEventListener('click', function (event) {
    var target = event.target;
    if (target && target.classList.contains('nav-list__item')) {
      for (var i = 0; i < navTab.length; i++) {
        if (target === navTab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // mobile menu
  var mobileMenuOpen = function () {
    var navHeader = document.querySelectorAll('.page-header__header');
    var navItem = document.querySelectorAll('.nav-list__item');
    var buttonMobile = document.querySelector('.page-header__icon');

    navHeader.forEach(function (item) {
      item.addEventListener('click', navMobileToggle);
      item.addEventListener('click', buttonMobileRotate);
    });

    navItem.forEach(function (item) {
      item.addEventListener('click', tabChoose);
    });

    function buttonMobileRotate() {
      buttonMobile.classList.toggle('rotate-simple');
    }

    function navMobileToggle() {
      this.parentElement.classList.toggle('is-active');
    }

    function tabChoose() {
      var text = this.innerText;
      var select = this.closest('.page-header__mobile');
      var currentText = select.querySelector('.page-header__current');
      currentText.innerText = text;
    }
  };
  mobileMenuOpen();

  // custom select
  var selectOpen = function () {
    var selectHeader = document.querySelectorAll('.components-select__header');
    var selectItem = document.querySelectorAll('.components-select__item');
    var buttonSelect = document.querySelector('.components-select__icon');

    selectHeader.forEach(function (item) {
      item.addEventListener('click', selectToggle);
      item.addEventListener('click', buttonSelectRotate);
    });

    selectItem.forEach(function (item) {
      item.addEventListener('click', selectChoose);
    });

    function buttonSelectRotate() {
      buttonSelect.classList.toggle('rotate-simple');
    }

    function selectToggle() {
      this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
      var text = this.innerText;
      var select = this.closest('.components-select');
      var currentText = select.querySelector('.components-select__current');
      currentText.innerText = text;
    }
  };
  selectOpen();

  // add ... to faqtitles for mobile
  function truncateFaqTitles() {
    var faqTitles = Array.from(document.querySelectorAll('.long-text'));
    var faqListPanel = document.querySelectorAll('.faq-list__panel');

    for (var i = 0; i < faqTitles.length; i++) {
      var content = faqTitles[i].innerHTML;
    }
    var arrayText = content.split('');
    arrayText.length = 84;

    var newText = arrayText.join('') + '...';

    if (window.innerWidth >= 768) {
      for (var k = 0; k < faqTitles.length; k++) {
        faqTitles[k].innerHTML = content;
      }
    } else {
      for (var j = 0; j < faqTitles.length; j++) {
        faqTitles[j].innerHTML = newText;
      }
    }

    faqListPanel.forEach(function (elem) {
      elem.addEventListener('click', function () {
        if (elem.classList.contains('panel-open') && window.innerWidth < 768) {
          for (var l = 0; l < faqTitles.length; l++) {
            faqTitles[l].innerHTML = content;
          }
        }
      });
    });

  }
  truncateFaqTitles();
})();
