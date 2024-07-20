import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/mdi-v7'
import App from './App.vue';
import 'quasar/dist/quasar.css';
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@/assets/styles/nullstyle.scss';
import '@/assets/styles/style.scss';

createApp(App).use(Quasar, {
    iconSet: quasarIconSet
}).mount('#app');
