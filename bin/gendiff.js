#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../index.js'; // Импортируем функцию сравнения

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first configuration file')
  .argument('<filepath2>', 'path to the second configuration file')
  .option('-f, --format <type>', 'output format', 'default')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2); // Получаем разницу
    console.log(diff); // Выводим результат на консоль
  });

program.parse(process.argv);
