import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: [
      'node_modules/**',
      '.nuxt/**',
      '.output/**',
      'dist/**',
      'coverage/**',
      '*.min.js',
      '*.d.ts',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        // Nuxt.js 3 globals
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        defineNuxtPlugin: 'readonly',
        useRuntimeConfig: 'readonly',
        useNuxtApp: 'readonly',
        navigateTo: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useLazyFetch: 'readonly',
        useFetch: 'readonly',
        $fetch: 'readonly',
        // Custom composables
        useAuth: 'readonly',
        useTheme: 'readonly',
        // Vue 3 Composition API
        ref: 'readonly',
        reactive: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        onBeforeMount: 'readonly',
        onBeforeUnmount: 'readonly',
        onUpdated: 'readonly',
        onBeforeUpdate: 'readonly',
        nextTick: 'readonly',
        readonly: 'readonly',
        // Browser globals
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        process: 'readonly',
        MediaQueryListEvent: 'readonly',
        // Node.js globals
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      vue,
      prettier,
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // Vue specific rules
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/no-unused-vars': 'off',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'commonjs',
      },
      globals: {
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // General rules
      'no-console': 'off', // Allow console in scripts
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        // Nuxt.js 3 globals
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        defineNuxtPlugin: 'readonly',
        useRuntimeConfig: 'readonly',
        useNuxtApp: 'readonly',
        navigateTo: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useLazyFetch: 'readonly',
        useFetch: 'readonly',
        $fetch: 'readonly',
        // Custom composables
        useAuth: 'readonly',
        useTheme: 'readonly',
        // Vue 3 Composition API
        ref: 'readonly',
        reactive: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        onBeforeMount: 'readonly',
        onBeforeUnmount: 'readonly',
        onUpdated: 'readonly',
        onBeforeUpdate: 'readonly',
        nextTick: 'readonly',
        readonly: 'readonly',
        // Browser globals
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        process: 'readonly',
        MediaQueryListEvent: 'readonly',
        // Node.js globals
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      vue,
      prettier,
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // Vue specific rules
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/no-unused-vars': 'off',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        // Nuxt.js 3 globals
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        defineNuxtPlugin: 'readonly',
        useRuntimeConfig: 'readonly',
        useNuxtApp: 'readonly',
        navigateTo: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useLazyFetch: 'readonly',
        useFetch: 'readonly',
        $fetch: 'readonly',
        // Custom composables
        useAuth: 'readonly',
        useTheme: 'readonly',
        // Vue 3 Composition API
        ref: 'readonly',
        reactive: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        onBeforeMount: 'readonly',
        onBeforeUnmount: 'readonly',
        onUpdated: 'readonly',
        onBeforeUpdate: 'readonly',
        nextTick: 'readonly',
        readonly: 'readonly',
        // Browser globals
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        process: 'readonly',
        MediaQueryListEvent: 'readonly',
        // Node.js globals
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      // Vue specific rules
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/no-unused-vars': 'off',
      'vue/valid-template-root': 'error',
      'vue/no-parsing-error': 'error',

      // Disable TypeScript rules for Vue template
      '@typescript-eslint/no-unused-vars': 'off',

      // Prettier integration
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
]
