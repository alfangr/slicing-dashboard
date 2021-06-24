module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          0: '#ef7041',
          1: '#dfdcff',
          2: '#6c5bf3',
          100: '#f8f9fe',
          200: '#e7f6f5',
          300: '#d4eef0',
          400: '#27b7ad',
          500: '#00aa9f',
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
