import fs from 'fs';
import path from 'path';

import parse from './parsersFile.js'
import buildDiff from './compare.js';

const genDiff = (filepath1, filepath2) => {
  const fileFirstPath = path.resolve(process.cwd(), filepath1)
  const fileSecondPath = path.resolve(process.cwd(), filepath2)

  const firstFileData = fs.readFileSync(fileFirstPath, 'utf-8')
  const secondFileData = fs.readFileSync(fileSecondPath, 'utf-8')

  const firstFileExtension = path.extname(fileFirstPath).slice(1)
  const secondFileExtension = path.extname(fileSecondPath).slice(1)

  const obj1 = parse(firstFileData, firstFileExtension)
  const obj2 = parse(firstFileData, firstFileExtension)

  const internalTree = buildDiff(obj1, obj2);
  console.log('internalTree: ', internalTree);




  return 'скоро вернется в будущем нужный результат'
};

export default genDiff;