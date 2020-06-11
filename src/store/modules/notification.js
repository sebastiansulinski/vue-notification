export const namespaced = true;

export const state = {
  notifications: [],
};

export const mutations = {
  PUSH(state, notification) {
    state.notifications = [notification];
  },
  DELETE(state) {
    state.notifications = [];
  },
};

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification);
  },
  remove({ commit }, notification) {
    commit('DELETE', notification);
  },
};

export const getters = {
  has(state) {
    return Object.entries(state.notifications).length > 0;
  },
};
