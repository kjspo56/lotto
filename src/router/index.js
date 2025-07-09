import Vue from 'vue';
import Router from 'vue-router';
import LottoGenerator from '../views/LottoGenerator.vue';
import LottoHistory from '../views/LottoHistory.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LottoGenerator },
    { path: '/history', component: LottoHistory },
  ],
});
