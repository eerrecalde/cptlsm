import Api from '~/api'

export default {
  state: {
    funds: {},
    ngoFundsHeaders: [],
    ngoFunds: []
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
    },

    FETCH_NGO_FUNDS: ({ commit }, id) => {
      commit('BEGIN_AJAX_CALL')

      return Api.getAllNgoFunds(id).then(funds => {
        console.log('funds', funds)
        commit('SET_NGO_FUNDS', { funds })
        commit('AJAX_CALL_FINISHED')
      }).catch(error => {
        commit('AJAX_CALL_FINISHED')
        throw error
      })
    },

    FETCH_NGO_FUNDS_HEADERS: ({ commit }) => {
      commit('BEGIN_AJAX_CALL')

      return Api.getAllNgoFundsHeaders().then(headers => {
        console.log('headers', headers)
        commit('SET_NGO_FUNDS_HEADERS', { headers })
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
    },

    SET_NGO_FUNDS: (state, { funds }) => {
      state.ngoFunds = funds
    },

    SET_NGO_FUNDS_HEADERS: (state, { headers }) => {
      state.ngoFundsHeaders = headers
    }
  },

  getters: {
    getFunds: state => state.funds,
    getNgoFunds: state => state.ngoFunds,
    getNgoFundsHeaders: state => state.ngoFundsHeaders
  }
}
