/** 
 * удаляет дубликаты из массива
 * @param {Array} array - массив с дубликатами
 * @returns {Array} - массив без дубликатов
 */
function deleteAllDublicates (array) {
    return [...new Set(array)];
}


