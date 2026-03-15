/* eslint-disable import/no-default-export */
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import { configs, plugin } from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  configs.recommendedTypeChecked,
  configs.strictTypeChecked,
  configs.stylisticTypeChecked,
  prettierRecommended,
  unicorn.configs.recommended,
  sonarjs.configs.recommended,
  {
    ignores: ['**/node_modules/**', 'dist/**'],
  },
  {
    languageOptions: {
      parserOptions: {
        // projectService: true,
        projectService: {
          allowDefaultProject: ['*.cjs', '*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
    },
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    // Turn off rules you don't like.
    rules: {
      'class-methods-use-this': 'off',

      'import/no-default-export': 'error',
      'import/prefer-default-export': 'off',

      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true, ignoreVoid: true }],

      'sonarjs/no-commented-code': 'off',
    },
  },
);
