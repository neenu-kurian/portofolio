const tailwindConfig = {
  content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}", "./pages/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out',
        'fade-in-delay': 'fade-in 3s ease-out'
      }
    },
  },
  plugins: [],
};

export default tailwindConfig;
