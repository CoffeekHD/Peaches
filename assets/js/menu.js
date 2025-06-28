const menuBtn = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.menu');
const subMenu = document.querySelector(`[data-submenu]`);
const searchContainer = document.querySelector('.header__search-container');
const searchElem = document.querySelector('.search-item');
const logInElem = document.querySelector('.auth-item');
const menuItems = document.querySelectorAll('.menu__item');
const menuItemsArray = Array.from(menuItems);
const overlay = document.querySelector('.overlay');
const windowWidth = window.innerWidth;
const body = document.body;

document.addEventListener('DOMContentLoaded', moveElementInMenu)
menuBtn.addEventListener('click', openMenu);
overlay.addEventListener('click', overlayCloseMenu)

function openMenu() {
    searchContainer.classList.remove('active')
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    
    if(subMenu.classList.contains('active')) {
        subMenu.classList.remove('active')
    }
    
    if(menuBtn.classList.contains('active')) {
        addOverlay()
        disableScroll()
    } else {
        removeOverlay()
        enableScroll()
    }
}

function addOverlay() {
    overlay.classList.remove('hide')
    overlay.addEventListener('click', overlayCloseMenu)
}

function removeOverlay() {
    overlay.classList.add('hide')
}

function overlayCloseMenu() {
    const menuElems = [menu, subMenu, menuBtn, searchContainer];
    menuElems.forEach(elem => {
        elem.classList.remove('active')
    })
    overlay.classList.add('hide')
    enableScroll()
}

function closeMenu() {
    searchElem.addEventListener('click', () => {
        if(menu.classList.contains('active') && menuBtn.classList.contains('active')) {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            overlay.classList.add('hide')
            if(subMenu.classList.contains('active')) {
                subMenu.classList.remove('active')
            }
            enableScroll()
        }
    })
}

function moveElementInMenu() {
    if(windowWidth <= 425) {
        menuItemsArray.push(searchElem, logInElem)
        menu.append(searchElem, logInElem)
    }
}

function disableScroll() {
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none'; // Для мобильных устройств
}

function enableScroll() {
    body.style.overflow = '';
    body.style.touchAction = '';
}

closeMenu()