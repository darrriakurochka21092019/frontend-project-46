#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();
import genDiff from '../index.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first configuration file')
  .argument('<filepath2>', 'path to the second configuration file')
  .option('-f, --format <type>', 'output format', 'default')
  .action((filepath1, filepath2) => {

    const diff = genDiff(filepath1, filepath2)
  })

program.parse(process.argv);
