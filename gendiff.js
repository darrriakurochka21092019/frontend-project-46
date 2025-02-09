#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first configuration file')
  .argument('<filepath2>', 'path to the second configuration file')
  .option('-f, --format <type>', 'output format', 'default');

program.parse(process.argv);

// Функция для чтения и парсинга файла
const readFile = (filepath) => {
  const absolutePath = path.resolve(filepath); // Преобразуем в абсолютный путь
  const content = fs.readFileSync(absolutePath, 'utf-8'); // Читаем файл синхронно
  return JSON.parse(content); // Парсим JSON
};

// Получаем аргументы
const filepath1 = program.args[0];
const filepath2 = program.args[1];

// Читаем и парсим файлы
let data1, data2;

try {
  data1 = readFile(filepath1);
  data2 = readFile(filepath2);
} catch (error) {
  console.error(`Error reading files: ${error.message}`);
  process.exit(1);
}

// Функция для сравнения данных
const compareData = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = [...new Set([...keys1, ...keys2])];

  const differences = allKeys.map(key => {
    if (!keys1.includes(key)) {
      return `Property '${key}' was added with value: ${data2[key]}`;
    }
    if (!keys2.includes(key)) {
      return `Property '${key}' was removed`;
    }
    if (data1[key] !== data2[key]) {
      return `Property '${key}' was changed from ${data1[key]} to ${data2[key]}`;
    }
    return null;
  }).filter(Boolean);
  
  return differences;
};

// Сравниваем данные
const differences = compareData(data1, data2);

// Выводим результат
if (differences.length > 0) {
  console.log('Differences:');
  differences.forEach(diff => console.log(diff)); // Выводим каждое различие на новой строке
} else {
  console.log('No differences found');
}
