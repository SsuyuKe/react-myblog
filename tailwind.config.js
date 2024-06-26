/** @type {import('tailwindcss').Config} */
export default {
  content: [ // 新增
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#9CAFAA',
        primaryTabColor: '#FA7070',
        secondaryTabColor: '#7AB2B2',
        cardTagColor: '#E9A89B',
        gray: {
          100: '#f5f5f5',
          200: '#ededed',
          300: '#aaa'
        }
      }
    },
  },
  plugins: [],
}

