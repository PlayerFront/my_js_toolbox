/**
 * Создает DOM-элемент с заданными параметрами
 * @param {string} tagName - название тега (div, p, a и т.д)
 * @param {Object} options - параметры элемента
 * @param {string[]} options.classes - массив классов
 * @param {Object} options.attrs - объект с атрибутами
 * @param {string} options.text - текст содержимого
 * @param {HTMLElement[]} options.children - массив дочерних элементов
 * @returns {HTMLElement} - созданный элемент
 * 
 * @example
 * createElement ('a', {
 * classes: ['btn', 'btn-primary'],
 * attrs: { herf: '#', 'data-id': '123'},
 * text: 'Click me'
 * });
 */

function createElement (tagName, {classes = [], attrs = {}, text = '', children = []} = {}) {
    const element = document.createElement(tagName);

    classes.forEach(className => element.classList.add(className));

    for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(key, value);
    }

    if (text) {
        element.textContent = text;
    }

    children.forEach(child => element.appendChild(child));

    return element;
}