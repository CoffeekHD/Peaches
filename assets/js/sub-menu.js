document.addEventListener('click', documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('[data-parent')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

        if(subMenu) {
            subMenu.classList.toggle('active');
        }
        e.preventDefault();
    }
}