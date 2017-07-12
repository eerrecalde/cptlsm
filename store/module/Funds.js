import Api from '~/api'

export default {
  state: {
    funds: {}
  },

  actions: {
    FETCH_FUNDS: ({ commit }) => {
      commit('BEGIN_AJAX_CALL')

      return Api.getAllFunds().then(funds => {
        commit('SET_FUNDS', { funds })
        commit('AJAX_CALL_FINISHED')
      }).catch(error => {
        commit('AJAX_CALL_FINISHED')
        throw error
      })
    }
  },

  mutations: {
    SET_FUNDS: (state, { funds }) => {
      state.funds = funds
    }
  },

  getters: {
    getFunds: state => state.funds
  }
}
