// vite.config.js
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      context: {
        title: 'Hello, world!',
      },
    }),
  ],
};