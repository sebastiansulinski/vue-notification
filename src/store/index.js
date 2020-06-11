import Vue from 'vue';
import Vuex from 'vuex';
import { notification } from '../index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { notification },
});
