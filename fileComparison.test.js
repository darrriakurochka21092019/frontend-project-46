import fs from 'fs';
import path from 'path';

// Функция для сравнения JSON-файлов
const compareJsonFiles = (file1, file2) => {
    const data1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
    const data2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));
    return JSON.stringify(data1) === JSON.stringify(data2);
};

// Тесты для сравнения JSON-файлов
describe('JSON comparison', () => {
    it('should correctly compare two JSON files', () => {
        const file1Path = path.join(__dirname, '__fixtures__', 'example1.json');
        const file2Path = path.join(__dirname, '__fixtures__', 'example2.json');
        expect(compareJsonFiles(file1Path, file2Path)).toBe(true);
    });
});
