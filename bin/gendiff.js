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
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
  });

program.parse(process.argv);
