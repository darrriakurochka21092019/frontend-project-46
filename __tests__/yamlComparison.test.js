import fs from 'fs';
import path from 'path';
import genDiff from '../index.js'; // Импортируйте вашу функцию сравнения

// Функция для получения пути к файлам фикстур
const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

describe('YAML comparison', () => {
    it('should compare two YAML files', () => {
        const filepath1 = getFixturePath('file1.yml'); // Путь к первому файлу фикстуры
        const filepath2 = getFixturePath('file2.yml'); // Путь ко второму файлу фикстуры
        const expectedOutput = fs.readFileSync('./__fixtures__/resultStylish.txt'); // Ожидаемый вывод

        console.log('genDiff(filepath1, filepath2)): ', genDiff(filepath1, filepath2))
        console.log('expectedOutput: ', expectedOutput);
        expect(genDiff(filepath1, filepath2)).toBe(expectedOutput); // Проверяем, что функция возвращает ожидаемый результат
    });
});
