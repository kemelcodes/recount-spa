// import axios from '@/axios';
import * as types from '../mutation-types';
import data from '../../../users.json';

const state = {
	user: null,
	index: null,
};

const getters = {
	relatives: (getters) => (user) => getters.list.filter(relative => { 
		const { parentId1, parentId2, spouseId } = user;
		if(
				relative.id === parentId1 || 
				relative.id === parentId2 ||
				relative.id === spouseId
			) { 
			return relative;
		}
		
	}), 
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
			console.log(user)
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
		state.user = user;
	},
	[types.FETCH_USER_LIST] (state, { list }) { 
		state.index = list;
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