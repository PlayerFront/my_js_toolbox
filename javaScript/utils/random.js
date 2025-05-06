/**
 * Генерирует случайное число в диапазоне
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @returns {number} - случайное число
 * @example 
 * getRandomInt(1, 10) // 7
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Генерирует случайный цвет в RGB-формате (rgb(r, g, b))
 * @returns {string} случайный RGB-цвет, например "rgb(100, 200, 50)"
 */
function getRandonRGBColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Генерирует случайный цвет в HEX формате (#RRGGBB)
 * @returns {string} случайный HEX-цвет, например "A1B2C3"
 */
function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}