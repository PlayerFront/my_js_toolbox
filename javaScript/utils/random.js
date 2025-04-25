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