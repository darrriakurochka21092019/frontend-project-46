#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../index.js'; // Импортируем функцию сравнения
import path from 'path';
import fs from 'fs';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first configuration file')
  .argument('<filepath2>', 'path to the second configuration file')
  .option('-f, --format <type>', 'output format', 'default')
  .action((filepath1, filepath2, options) => {
    // Получаем расширение файлов
    const ext1 = path.extname(filepath1).slice(1);
    const ext2 = path.extname(filepath2).slice(1);
    
    // Убедитесь, что оба файла имеют одинаковое расширение
    if (ext1 !== ext2) {
      console.error(`Error: File extensions do not match (${ext1} vs ${ext2})`);
      process.exit(1);
    }

    // Проверка существования файлов
    if (!fs.existsSync(filepath1) || !fs.existsSync(filepath2)) {
      console.error(`Error: One or both files do not exist.`);
      process.exit(1);
    }

    try {
      // Получаем разницу
      const diff = genDiff(filepath1, filepath2, options.format);
      console.log(diff); // Выводим результат на консоль
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
