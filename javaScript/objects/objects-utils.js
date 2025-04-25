/**
 * суммирует все числовые значения вложенных объектов
 * @param {Object} obj - исходный объект
 * @returns {number} - сумма всех значений
 * @example
 * const obj = { a: 1, b: { c:2, d: { e: 3 }}};
 * sumNested(obj) 
 */
function sumNested (obj) {
    return Object.values(obj).reduce((sum, value) =>{
        if ( typeof value === 'number') {
            return sum + value;
        } else if (typeof value === 'object') {
            return sum + getSumNumbers(value);
        } else {
            return sum;
        }
    }, 0);
}