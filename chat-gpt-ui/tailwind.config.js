/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      secondary: '#7F56D9',

      bg_color: '#343541',
      chats_side_bar: '#2F303E',

      nav_link_color: '#FFFFFF',

      dropdown_menu_bg_color: '#FFFFFF',
      dropdown_menu_item_color: '#2F303E',

      primary_button_label_color: '#FFFFFF',

      social_button_color: '#D0D5DD',
    },
    extend: {
      fontFamily: {
        inter: 'Inter',
        poppins: 'Poppins',
      },
    },
  },
  plugins: [],
}
