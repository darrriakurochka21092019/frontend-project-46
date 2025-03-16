import fs from 'fs';
import path from 'path';
import parse from './parsersFile.js'; // Импортируем парсер
import buildDiff from './comparePrevTask.js'; // Импортируем функцию для сравнения объектов
import yaml from 'js-yaml'; // Импортируем библиотеку для работы с YAML

// Функция для форматирования вывода
const formatOutput = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.stringify(data, null, 2); // Форматируем JSON с отступами
    case 'yaml':
      return yaml.dump(data); // Форматируем в YAML
    default:
      throw new Error(`Unsupported format: ${format}`); // Выбрасываем ошибку для неподдерживаемых форматов
  }
};

const genDiff = (filepath1, filepath2, format = 'json') => {
  const fileFirstPath = path.resolve(process.cwd(), filepath1);
  const fileSecondPath = path.resolve(process.cwd(), filepath2);

  const firstFileData = fs.readFileSync(fileFirstPath, 'utf-8');
  const secondFileData = fs.readFileSync(fileSecondPath, 'utf-8');

  const firstFileExtension = path.extname(fileFirstPath).slice(1);
  const secondFileExtension = path.extname(fileSecondPath).slice(1);

  const obj1 = parse(firstFileData, firstFileExtension);
  const obj2 = parse(secondFileData, secondFileExtension);

  const internalTree = buildDiff(obj1, obj2);
  console.log('internalTree: ', internalTree)
};

export default genDiff;
