module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',

    },
    colors: {
      'main-color': '#1c8d73',
      'white': '#fff',
      'disabled': 'rgb(28 141 115 / .8)'
    },
    extend: {
      boxShadow: {
        'nav-sh': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      },
      zIndex: {
        '1': '-1'
      },
      minHeight: {
        '20': '5rem'
      },
      width: {
        '40em': '40em',
        '95': '95%'
      },
      borderLeftWidth: {
        '1': '1px'
      },
      fontSize: {
        'root': '16px',
        'sm-root': '11px'
      },
    },
  },
  plugins: [],
}

