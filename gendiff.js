#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0') // Устанавливаем номер версии
  .description('Compares two configuration files and shows a difference.') // Описание утилиты
  .option('-h, --help', 'output usage information'); // Убираем дублирование флага --version

program.parse(process.argv);

// Обработка вывода версии
if (program.opts().version) {
  console.log('1.0.0');
}

// Обработка вывода справки
if (program.opts().help) {
  program.outputHelp();
}
