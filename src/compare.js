import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const diff = {};

  // Проходим по ключам первого объекта
  Object.keys(obj1).forEach((key) => {
    if (!_.has(obj2, key)) {
      // Ключ есть только в первом объекте
      diff[` - ${key}: ${obj1[key]}`] = ''; // Добавляем его к output с символом -
    } else if (!_.isEqual(obj1[key], obj2[key])) {
      // Ключи есть в обоих объектах, но значения разные
      diff[` - ${key}: ${obj1[key]}`] = ` + ${key}: ${obj2[key]}`; // Добавляем оба значения к output
    } else {
      // Если значения одинаковы, выводим только один объект
      diff[key] = obj1[key]; // Добавляем одинаковый ключ и значение
    }
  });

  // Проверяем ключи из второго объекта
  Object.keys(obj2).forEach((key) => {
    if (!_.has(obj1, key)) {
      // Ключ есть только во втором объекте
      diff[` + ${key}: ${obj2[key]}`] = ''; // Добавляем его к output с символом +
    }
  });

  return diff; // Возвращаем объект различий
};

export default buildDiff;
