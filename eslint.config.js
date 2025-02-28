import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные браузера
        ...globals.node,    // Глобальные переменные Node.js
        ...globals.jest,    // Глобальные переменные Jest
      },
    },
  },
  pluginJs.configs.recommended,
];
