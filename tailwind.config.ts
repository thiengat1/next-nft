import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        main: 'url("/assets/images/bg-image-main.png")',
        chooseUs: 'url("/assets/images/chooseUs-bg.png")',
        footerBg: 'url("/assets/images/footer-bg.png")',
      },
      colors: {
        mainColor: '#191E35',
        pinkColor: '#F52AF5',
        blueColor: '#332FD0',
      },
    },
  },
  plugins: [],
};
export default config;
