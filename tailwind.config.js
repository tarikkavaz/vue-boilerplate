module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'extdark': '#291A17',
        'extlight': '#F2EFE7',
        'extaccent': '#1C4BE6',
      },
      fontFamily: {
        'default' : ['Montserrat'],
        'handwriting': ['"Cookie"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
}