/**
 * Очищает строку от лишних символов, оствяляя только буквы, цифры и пробелы
 * @param {string} str - исходная строка
 * @param {Object} [options] - настройки очистки
 * @param {boolean} [options.keepNumbers = true] - сохранять цифры (true/false)
 * @param {boolean} [options.keepSpaces = true] - сохранять пробелы (true/false)
 * @param {string[]} [options.keepChars=[]] - дополнительные символы, которые нужно оставить
 * @returns {string} - очищенная строка
 * 
 * @example
 * cleanString("Hello, world! 123"); // "hello world 123"
 * cleanString("Email: test@example.com", {keepChars: ['@', '.']}); // "email test@example.com"
 */
function cleanString (str, options = {}) {
    const {
        keepNumbers = true,
        keepSpaces = true,
        keepChars = [],
    } = options;

    // базовый regex: удаляем все, кроме букв
    let regexPattern = '[a-zа-яё';

    // Пример итогового regex для разных случаев:
    // 1. Базовый вариант (только буквы): /[^a-zа-яё]/gi
    // 2. С пробелами: /[^a-zа-яё\s]/gi
    // 3. С цифрами: /[^a-zа-яё0-9]/gi
    // 4. С кастомными символами (например "-" и "'"): /[^a-zа-яё0-9\ы\-']/gi

    if (keepNumbers) regexPattern += '0-9';
    if (keepSpaces) regexPattern += '\\s'
}