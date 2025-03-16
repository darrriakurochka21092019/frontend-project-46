import _ from 'lodash';

const buildDiff = (obj1, obj2) => { // Определяем функцию buildDiff, которая принимает два объекта obj1 и obj2.
  // Объединяем ключи из обоих объектов и сортируем их
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  
  // Создаём массив output, в котором будем хранить разницу между объектами
  const output = keys.map(key => {
    // Проверяем, есть ли ключ только в obj2
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      // Если ключ есть только в obj2, добавляем его к output с символом +
      return `  + ${key}: ${JSON.stringify(obj2[key])}`;
    }
    // Проверяем, есть ли ключ только в obj1
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      // Если ключ есть только в obj1, добавляем его к output с символом -
      return `  - ${key}: ${JSON.stringify(obj1[key])}`;
    }
    // Проверяем, равны ли значения ключей в обоих объектах
    if (!_.isEqual(obj1[key], obj2[key])) {
      // Если значения различны, добавляем оба значения к output
      return [
        `  - ${key}: ${JSON.stringify(obj1[key])}`, // Для obj1 с символом -
        `  + ${key}: ${JSON.stringify(obj2[key])}`, // Для obj2 с символом +
      ];
    }
    // Если значения одинаковы, выводим только один объект
    return `    ${key}: ${JSON.stringify(obj1[key])}`; // Выводим ключ и значение без изменений.
  });

  // Объединяем полученный массив output в строку
  const resultString = output
    .flat() // Объединяем вложенные массивы в случае различий
    .filter(Boolean) // Удаляем пустые значения
    .join('\n'); // Объединяем элементы массива в строку с переносами строки вместо запятых

  // Обрамляем вывод в фигурные скобки
  return `{\n${resultString}\n}`;
};

export default buildDiff;