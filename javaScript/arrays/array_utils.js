/** 
 * удаляет дубликаты из массива
 * @param {Array} array - массив с дубликатами
 * @return {Array} - массив без дубликатов
 */
function deleteAllDublicates (array) {
    return [...new Set(array)];
}


