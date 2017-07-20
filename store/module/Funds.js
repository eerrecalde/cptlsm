import Api from '~/api'

function getNewId (arr) {
  let sortedArray = arr.sort((a, b) => {
    return a.id - b.id
  })

  var lastId = parseInt(sortedArray[sortedArray.length - 1].id)

  return lastId + 1
}

export default {
  state: {
    funds: [],
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

    ADD_FUND: ({ commit }, name) => {
      commit('UPDATE_FUNDS', name)
    },

    FETCH_NGO_FUNDS: ({ commit }, id) => {
      commit('BEGIN_AJAX_CALL')

      return Api.getAllNgoFunds(id).then(funds => {
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
    },

    UPDATE_FUNDS: (state, name) => {
      console.log('XXX', state.funds, name)
      state.funds = state.funds.concat({
        id: getNewId(state.funds),
        name,
        pending: true
      })
      console.log('name', name, state.funds)
    }
  },

  getters: {
    getFunds: state => state.funds,
    getNgoFunds: state => state.ngoFunds,
    getNgoFundsHeaders: state => state.ngoFundsHeaders
  }
}
