#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import _ from 'lodash';

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
  const absolutePath = path.resolve(filepath);
  const content = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(content);
};

// Функция для нахождения различий
const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.sortBy([...new Set([...keys1, ...keys2])]);

  const differences = allKeys.map((key) => {
    if (!keys1.includes(key)) {
      return `  + ${key}: ${data2[key]}`; // Ключ добавлен
    }
    if (!keys2.includes(key)) {
      return `  - ${key}: ${data1[key]}`; // Ключ удален
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`; // Значения различаются
    }
    return `    ${key}: ${data1[key]}`; // Если значения совпадают
  });

  return `{\n${differences.filter(Boolean).join('\n')}\n}`; // Формируем финальный вывод
};

// Получаем аргументы
const filepath1 = program.args[0];
const filepath2 = program.args[1];

// Сравниваем и выводим результат
const result = genDiff(filepath1, filepath2);
console.log(result);
