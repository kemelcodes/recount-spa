import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';

import user from '@/store/modules/user';

import createPersist from 'vuex-localstorage';

Vue.use(Vuex);

const debug = process.env.VUE_NODE_ENV !== 'production';

let localStorage = createPersist({
	namespace: process.env.VUE_APP_NAME,
	initialState: {},
	expires: 1.21e+9 // two week expiration
});

export default new Vuex.Store({
	actions,
	getters,
	modules: { 
		user: {
			namespaced: true,
			...user
		},
	},
	strict: debug,
	plugins: [ localStorage ],
});