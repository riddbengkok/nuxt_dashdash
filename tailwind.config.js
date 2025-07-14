/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        muli: ['Muli', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#61C0BF',
          'primary-content': '#FFFFFF',
          secondary: '#BBDED6',
          'secondary-content': '#2D3748',
          accent: '#FAE3D9',
          'accent-content': '#2D3748',
          neutral: '#BBDED6', // sidebar background
          'neutral-content': '#2D3748', // sidebar text
          navbar: '#61C0BF', // navigation header background
          'navbar-content': '#FFFFFF', // navigation header text
          'base-100': '#FFFFFF', // main background
          'base-200': '#F7FAFC', // secondary background
          'base-300': '#E2E8F0', // border color
          'base-content': '#2D3748', // main text
          info: '#61C0BF',
          'info-content': '#FFFFFF',
          success: '#48BB78',
          'success-content': '#FFFFFF',
          warning: '#ED8936',
          'warning-content': '#FFFFFF',
          error: '#F56565',
          'error-content': '#FFFFFF',
        },
      },
      'dark',
      {
        sokle: {
          primary: '#364F6B',
          'primary-content': '#F5F5F5',
          secondary: '#3FC1C9',
          'secondary-content': '#F5F5F5',
          accent: '#FC5185',
          'accent-content': '#F5F5F5',
          neutral: '#364F6B', // sidebar background
          'neutral-content': '#F5F5F5', // sidebar text
          navbar: '#3FC1C9', // navigation header background
          'navbar-content': '#22223B', // navigation header text
          'base-100': '#F5F5F5', // main background
          'base-200': '#2B3A55', // sidebar/panel background (matches neutral)
          'base-300': '#D1D5DB', // border color
          'base-content': '#22223B', // main text
          info: '#3FC1C9',
          'info-content': '#F5F5F5',
          success: '#43AA8B',
          'success-content': '#F5F5F5',
          warning: '#FFD166',
          'warning-content': '#22223B',
          error: '#FC5185',
          'error-content': '#F5F5F5',
        },
      },
    ],
  },
}
