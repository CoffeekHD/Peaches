const titles = document.querySelectorAll('.sidebar-title');

titles.forEach((title) => {
  title.addEventListener('click', () => {
    const accordion = title.closest('.catalog-sidebar__accordion');
    const icon = title.querySelector('.sidebar-icon');

    accordion.classList.toggle('active');
    title.classList.toggle('active');
    icon.classList.toggle('active');
  });
});

const items = document.querySelectorAll('.catalog-sidebar__item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});