/* в этот файл добавляет скрипты*/
const mainHeader = document.querySelector('.main-header');
const mainNavList = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const siteNavList = document.querySelector('.site-nav-list');
const addressIframe = document.querySelector('.address__iframe');

mainHeader.classList.remove('main-header--nojs');
mainNavList.classList.toggle('main-nav--opened');
siteNavList.classList.toggle('site-nav-list--closed');
addressIframe.classList.toggle('address__iframe--nojs');

mainNavToggle.addEventListener('click', () => {
  mainNavList.classList.toggle('main-nav--opened');
  siteNavList.classList.toggle('site-nav-list--closed');
});
