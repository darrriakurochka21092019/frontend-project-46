import fs from 'fs';
import path from 'path';
import compareJsonFiles from '../src/compare.js'; // Импортируем функцию сравнения

// Функция для получения пути к файлам фикстур
const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__', filename);

describe('JSON comparison', () => {
    it('should correctly compare two JSON files', () => {
        const file1Path = getFixturePath('example1.json');
        const file2Path = getFixturePath('example2.json');
        expect(compareJsonFiles(file1Path, file2Path)).toBe(true);
    });

    it('should return false for different JSON files', () => {
        const file1Path = getFixturePath('example1.json');
        const file2Path = getFixturePath('example2_different.json'); // Создайте этот файл с отличиями
        expect(compareJsonFiles(file1Path, file2Path)).toBe(false);
    });
});
