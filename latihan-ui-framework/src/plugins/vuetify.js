import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue.darken4, // #0D47A1
            secondary: colors.blue.darken3, // #1565C0
            accent: colors.shades.white, // #FFFFFF
          },
          dark: {
            primary: colors.shades.black, // #000000
          },
        },
      },
});
