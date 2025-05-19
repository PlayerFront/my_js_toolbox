/**
 * Numbers
 * Проверяет, является ли значение числом (и не NaN)
 * @returns {boolean} - возвращает правда/ложь в зависимости от переданного значения
 */
if (typeof value !== 'number' || isNaN(value)) return false;

/**
 * Проверяет, является ли значение целым числом (и не NaN)
 * @returns {boolean} - возвращает правда/ложь в зависимости от переданного значения
 */
if (!Number.isInteger(value)) return false;


/**
 * Strings
 * Проверяет, является ли значение строкой (не пустой, если нужно)
 * @returns {boolean} - возвращает правда/ложь в зависимости от переданного значения
 */
if (typeof value !== 'string' || value.trim() === '') return false;

/**
 * Проверяет, обернута ли строка в кавычки ('' || "")
 * @returns {boolean} - возвращает правда/ложь в зависимости от переданного значения
 */
if (!/^['"].*['"]$/ .test(value)) return false;


/**
 * Arrays and objects
 * Проверяет, является ли значение массивом (не пустым, если нужно)
 * @returns {boolean} - возвращает правда/ложь в зависимости от переданного значения
 */
if(!Array.isArray(value) || !value.length) return false

/**
 * Проверяет, является ли значение объектом (не null, не массивом, не пустым)
 * @returns {boolean} - возвращает правда/ложь в зависимости от переданного значения
 */
if (typeof value !== 'object' ||value === null || !Object.keys(value).length) return false;


/**
 * Пустые значения
 * Проверяет, является ли значение пустым (null, undefined, "", [], {})
 * @returns {boolean} - возвращает правда/ложь в зависимости от того, является ли значение пустым
 */
if (!value || (typeof value === 'object' && Object.keys(value).length === 0)) return false;