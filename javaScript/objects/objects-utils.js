/**
 * суммирует все числовые значения вложенных объектов
 * @param {Object} obj - исходный объект
 * @returns {number} - сумма всех значений
 * @example
 * const obj = { a: 1, b: { c:2, d: { e: 3 }}};
 * sumNested(obj) 
 */
function sumNested(obj) {
    return Object.values(obj).reduce((sum, value) => {
        if (typeof value === 'number') {
            return sum + value;
        } else if (typeof value === 'object') {
            return sum + getSumNumbers(value);
        } else {
            return sum;
        }
    }, 0);
}

/**
 * Объединяет два объекта в новый объект, сохраняя все свойства
 * Если свойства совпадают, то приоритет отдается свойствам из второго объекта
 * @param {Object1} obj1 - первый объект для объединения
 * @param {Object2} obj2 - второй объект для объединения
 * @returns {Object} - новый объект, содержащий свойства из обоих объектов
 * @example
 * const objA = {a: 1, b: 2};
 * const objB = {b: 3, c: 4};
 * const merged = mergeObjects(objA, objB);
 * // Результат: {a: 1, b: 3, c: 4}
 */
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}