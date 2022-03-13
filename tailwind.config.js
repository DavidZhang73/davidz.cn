module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light': '#e4f0fa',
        'dark': '#0f0f0f'
      },
      backgroundImage: {
        'light-hover': 'linear-gradient(145deg, #cdd8e1, #f4ffff)',
        'dark-hover': 'linear-gradient(145deg, #121212, #151515)'
      }
    },
    boxShadow: {
      'light-default': '7px 7px 14px #c2ccd5, -7px -7px 14px #ffffff',
      'light-active': 'inset 7px 7px 14px #c2ccd5, inset -7px -7px 14px #ffffff',
      'dark-default': '7px 7px 14px #111111, -7px -7px 14px #171717',
      'dark-active': 'inset 7px 7px 14px #111111, inset -7px -7px 14px #171717',
      'light-default-lg': '14px 14px 28px #c2ccd5, -14px -14px 28px #ffffff',
      'light-active-lg': 'inset 14px 14px 28px #c2ccd5, inset -14px -14px 28px #ffffff',
      'dark-default-lg': '14px 14px 28px #111111, -14px -14px 28px #171717',
      'dark-active-lg': 'inset 14px 14px 28px #111111, inset -14px -14px 28px #171717'
    },
    dropShadow: {
      'logo': ['14px 14px 14px #c2ccd5', '-14px -14px 14px #ffffff'],
      'none': '0 0 #000000'
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    }
  },
  plugins: []
}
