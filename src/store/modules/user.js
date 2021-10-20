// import axios from '@/axios';
import * as types from '../mutation-types';
import data from '../../../users.json';

const state = {
	user: null,
	index: null,
};

const getters = { 
	list: state => state.index != null ? state.index : [],
	active: state => state.user != null ? state.user : null,
};

const actions = { 
	loadList ({ commit }, { id }) { 
		try { 

			id === null ? commit('FETCH_USER_LIST', { list: data }) : null;

		} catch (e) { 
			console.error(e.toString());
		}
	},
	loadData ({ commit }, { user }) { 
		try { 
			commit('FETCH_USER_ACTIVE', { user });
		} catch (e) { 
			console.error(e.toString());
		}
	},
	/*async storeData (_) { 
		try { 

		} catch (e) { 
			console.error(e.toString());
		}
	}*/
};

const mutations = { 
	[types.FETCH_USER_ACTIVE] (state, { user }) { 
		state.active = user;
	},
	[types.FETCH_USER_LIST] (state, { list }) { 
		state.list = list;
	},
	/*[types.FETCH_USER_PROFILE] (state, { id }) { 

	},
	[types.UPDATE_USER_LIST] (state, { id }) { 
		
	}
*/};

export default {
	state,
	getters,
	actions,
	mutations
};