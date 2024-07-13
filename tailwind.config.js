/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'my-background': '#000011',
      },
      fontSize: {
        
        '10p': '10%',
        '20p':'20%',
        // Add more custom percentage font sizes as needed
      },
      margin: {
        '5p': '5%',
        '10p': '10%',
        // Add more custom percentage margins as needed
      },
      padding: {
        '5p': '5%',
        '10p': '10%',
        // Add more custom percentage paddings as needed
      },
      boxShadow: {
        
        'glow-hover': '0 0 20px rgba(255, 255, 255, 1)',
      },

    },
  },
  plugins: [],
};
