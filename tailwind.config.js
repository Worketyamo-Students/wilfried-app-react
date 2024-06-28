/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 27/06/2024 - 19:17:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
     'blue':'#19192C',
     'blue-ciel':'#8EA7E9',
     'gray':'#9E9E9F',
     'gray-black':'#979797',
     'blue-violet':'#7286D3',
     'gray-white':'#D9D9D9',
     'white':'#ffffff',
    },
    fontFamily: {
      sans: ['poppins'],
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '810px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

