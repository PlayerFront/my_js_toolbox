/** 
 * удаляет дубликаты из массива
 * @param {Array} array - массив с дубликатами
 * @returns {Array} - массив без дубликатов
 */
function deleteAllDublicates(array) {
    return [...new Set(array)];
}


/**
 * возвращает случайный элемент из массива
 * @param {Array} array - массив с элементами
 * @returns {*} -случайный элемент массива или 'null', если массив пуст или не является массивом
 * @example
 * getRandomElement([1, 2, 3]); // 2 (случайный элемент)
 * getRandomElement([]); // null 
 */
function getRandomElement(arr) {
    if (arr.length === 0 || !Array.isArray(arr)) return null;

    let max = arr.length - 1;
    let min = 0;

    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;


    return arr[randomInt];
}

/**
 * возвращает случайный элемент из массива (без проверки на пустоту), более короткий вариант, чем выше
 * @param {Array} array - массив с элементами
 * @returns {*} -случайный элемент массива или 'null', если массив пуст или не является массивом
 * @example
 * getRandomElement([1, 2, 3]); // 2 (случайный элемент)
 */

function getRandomElementShort(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


/**
 * возвращает массив случайных элементов из массива в параметрах функции
 * @param {Array} array - массив с элементами
 * @returns {Array} - массив случайных элементов
 * @example
 * getArrayOfRandomElements(['a', 'b', 'c', 'd']) // ['b', 'c'] (массив из случайных элементов)
 * getArrayOfRandomElements([1, 2, 3, 4, 5]) // [3, 1, 5] (массив из случайных чисел)
 */
function getArrayOfRandomElements(arr) {
    if (!arr?.length) return [];
    length = Math.floor(Math.random() * arr.length) + 1;
    return Array.from({ length }, () => arr[Math.floor(Math.random() * arr.length)])

}


/**
 * возвращает массив случайных чисел из заданного промежутка, с заданной длиной
 * @param {number} min - минимальное значение в диапазоне
 * @param {number} max - максимальное значение в диапазоне
 * @param {number} length - желаемая длина массива
 * @returns {number[]} - массив уникальных чисел без повторения подряд
 * @throws {Error} Если диапазон слишком мал для генерации неповторяющихся чисел
 */
function createArray(min, max, length) {
    if (length > 1 && max - min + 1 < 2) {
        throw new Error('Диапазон слишком узкий для генерации неповторяющихся чисел');
    }

    const array = [];
    let lastNumber = null;

    while (array.length < length) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if(randomNumber !== lastNumber) {
            array.push(randomNumber);
            lastNumber = randomNumber;
        }
    }
    return array;
}