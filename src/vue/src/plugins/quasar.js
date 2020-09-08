import Vue from "vue";

import "@/styles/quasar.sass";
import iconSet from "quasar/icon-set/line-awesome.js";
import lang from "quasar/lang/pt-br.js";
import "@quasar/extras/line-awesome/line-awesome.css";
import {
  Quasar
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    /* not needed if importStrategy is not 'manual' */
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: {},
  lang: lang,
  iconSet: iconSet
});
