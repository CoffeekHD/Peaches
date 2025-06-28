const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.header__search-container');
const searchCloseBtn = document.querySelector('.header__search-close');
const colors = document.querySelectorAll('.color-item');
const favIconWrapp = document.querySelectorAll('.best-sellers__icon')
const favIcon = document.querySelectorAll('.best-sellers__slide-fav-icon');

searchBtn.addEventListener('click', openSearchMenu);
searchCloseBtn.addEventListener('click', closeSearchMenu);

favIconWrapp.forEach((iconWrapper) => {
  iconWrapper.addEventListener('click', () => {
    const slide = iconWrapper.closest('.best-sellers__slide');
    const favIcon = slide.querySelector('.best-sellers__slide-fav-icon');
    
    favIcon.classList.toggle('active');
  });
});

colors.forEach(color => {
  color.addEventListener('click', () => {
    colors.forEach(elem => elem.classList.remove('active'));
    color.classList.add('active');
  });
});

function openSearchMenu() {
    search.classList.add('active');
};

function closeSearchMenu() {
    search.classList.remove('active');
}