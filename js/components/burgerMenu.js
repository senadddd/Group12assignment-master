//burgerMenu.js

/**
 * Funktion för att visa  hamburgarmenyn
 *
 */
export const burgerMenuFunc = () => {
    // Hämta in alla element som behövs för hamburgermenyn
    const burgerMenu = document.querySelector('#burger-menu');
    const menu = document.querySelector('#display-menu');
    const removeMenuIcon = document.querySelector('#remove-menu');

/**
 * setDisplay
 *
 * @param {*} element
 * @param { String } value
 */
function setDisplayValueOnHtmlElement(element, value) {
  element.style.display = value;
}
    
    // Denna eventlyssnare visar menyn vid klick på hamburger-ikonen
    burgerMenu.addEventListener('click', () => {
      setDisplayValueOnHtmlElement(menu, 'block');
      setDisplayValueOnHtmlElement(burgerMenu, 'none');
    });
    
    // Denna eventlyssnare döljer menyn vid klick på kryss ikonen
    removeMenuIcon.addEventListener('click', () => {
      setDisplayValueOnHtmlElement(menu, 'none');
      setDisplayValueOnHtmlElement(burgerMenu, 'block');
    });
}