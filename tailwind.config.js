/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-medium': ['Roboto-Medium', 'sans-serif'],
        'roboto-bold': ['Roboto-Bold', 'sans-serif'],
        moul: ['Moul', 'serif'],
        inter: ['Inter', 'sans-serif'],
        'inter-600': ['Inter-600', 'sans-serif'],
        'inter-semibold': ['Inter-SemiBold', 'sans-serif'],
        'inter-medium': ['Inter-Medium', 'sans-serif']
      },
      fontSize: {
        '33px': '33px',
        '8px': '8px',
        '22px': '22px'
      },
      lineHeight: {
        '70px': '70px'
      },
      colors: {
        'custom-blue-transparent': 'rgba(1, 194, 255, 0.50)',
        'custom-blue-less-transparent': 'rgba(1, 194, 255, 0.70)',
      },
      borderWidth: {
        '3': '3px'
      },
      borderColor: {
        'custom-blue': '#01C2FF'
      },
      backgroundColor: {
        'custom-blue-transparent-application': 'rgba(1, 101, 255, 0.05)'
      },
      margin: {
        '1px': '1px'
      },
      width: {
        "70px": "70px"
      },
      height: {
        '70px': "70px"
      },
      padding: {
        '6px': '6px'
      },
      borderRadius: {
        '21px': '21px',
        '19px': '19px'
      }
    },
  },
  plugins: [],
}

