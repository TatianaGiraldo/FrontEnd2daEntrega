import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#E53935',
        info: '#2196F3',
        success: '#26A69A',
        warning: '#FFB74D'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
});
