### Hexlet tests and linter status:
[![Actions Status](https://github.com/darrriakurochka21092019/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/darrriakurochka21092019/frontend-project-46/actions)

# Frontend Project 46

## Утилита сравнения файлов

Эта утилита позволяет сравнивать два конфигурационных файла (JSON) и выводить различия.

## Установка

1. Склонируйте репозиторий:bash
   git clone https://github.com/yourusername/frontend-project-46
2. Перейдите в директорию проекта:bash
   cd frontend-project-46
3. Установите зависимости:bash
   npm install
## Использование

Запустите утилиту с двумя файлами JSON для сравнения:
bash
./gendiff.js ./path/to/file1.json ./path/to/file2.json
### Пример

Предположим, у вас есть следующие файлы:

**file1.json**:
json
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false,
  "name": "Alice",
  "age": 30
}
**file2.json**:
json
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io",
  "name": "Alice"
}
Выполнив команду:
bash
./gendiff.js ./file1.json ./file2.json
Вы получите следующий вывод:
plaintext
{
  - follow: false
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
## Лицензия

MIT