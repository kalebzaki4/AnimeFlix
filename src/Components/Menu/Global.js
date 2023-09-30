'use strict';

/**
 * adicioando a funcionalidade de pesquisa no site
 */

const addEventOnElements = function (elements, eventType, callback) {
    for( const elem of elements) elem.addEventListener(eventType, callback);
}

const searchBox = document.querySelector("[search-box]")
const searchTogglers = document.querySelectorAll("[search-toggler]")

addEventOnElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active")
})