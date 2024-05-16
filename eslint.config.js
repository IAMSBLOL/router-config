import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
// import oxlint from 'eslint-plugin-oxlint'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

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

  // // react 相关，支持度不够

  // // hooks
  ...compat.plugins('react'),
  {
    plugins: {
      'react-hooks': reactHooks
    },
    rules: reactHooks.configs.recommended.rules
  },

  // 兼容 oxlint 必须最后一位
  // oxlint.configs['flat/recommended'],
  // 但需要文件名校验 oxlint 会关闭此项

  {
    files: ['src/**/*.{tsx,ts,js,jsx}'],
    rules: {
      indent: ['error', 2],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-max-props-per-line': ['error', {
        maximum: 1, // 可以根据需要调整这个值
        when: 'always' // 或者 "multiline"
      }],
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
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc']

]
