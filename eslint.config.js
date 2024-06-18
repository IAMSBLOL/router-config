import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
// import oxlint from 'eslint-plugin-oxlint'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname
})

export default [
  // es6 标准
  ...compat.extends('standard'),

  // eslint基本
  eslint.configs.recommended,
  // ts
  ...tseslint.configs.recommended,

  // oxlint 推荐的增强

  eslintPluginUnicorn.configs['flat/recommended'],

  {
    plugins: {
      'react-hooks': reactHooks
    },
    rules: reactHooks.configs.recommended.rules
  },

  {
    files: ['src/**/*.{tsx,ts,js,jsx}'],
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          warnOnUnassignedImports: true
        }
      ]
    }
  },

  {
    files: ['src/**/*.{tsx,ts,js,jsx}'],
    rules: {
      indent: ['error', 2],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true
          }
        }
      ]
    }
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'react/jsx-one-expression-per-line': 0,
      'react/jsx-max-props-per-line': ['error', {
        maximum: 1, // 可以根据需要调整这个值
        when: 'multiline' // 或者 "multiline"
      }],
      'react/jsx-closing-bracket-location': ['error', {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned'
      }],
      // bug
      'react/jsx-first-prop-new-line': [
        1, 'always'
      ],
      'react/jsx-wrap-multilines': [1, {
        declaration: 'parens-new-line',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore'
      }],
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2]
    }

  },
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc']

]
