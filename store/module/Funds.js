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
    ngoFunds: [],
    ngos: [],
    selectedNgo: ''
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

    FETCH_NGOS: ({ commit }) => {
      commit('BEGIN_AJAX_CALL')

      return Api.getAllNgos().then(ngos => {
        commit('SET_NGOS', { ngos })
        commit('AJAX_CALL_FINISHED')
      }).catch(error => {
        commit('AJAX_CALL_FINISHED')
        throw error
      })
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
    },

    UPDATE_SELECTED_NGO: ({ commit }, name) => {
      commit('SET_SELECTED_NGO', { name })
    }
  },

  mutations: {
    SET_FUNDS: (state, { funds }) => {
      state.funds = funds
    },

    SET_NGOS: (state, { ngos }) => {
      state.ngos = ngos
      state.selectedNgo = ngos[0].name
    },

    SET_NGO_FUNDS: (state, { funds }) => {
      state.ngoFunds = funds
    },

    SET_NGO_FUNDS_HEADERS: (state, { headers }) => {
      state.ngoFundsHeaders = headers
    },

    SET_SELECTED_NGO: (state, { name }) => {
      state.selectedNgo = name
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
    getNgos: state => state.ngos,
    getSelectedNgo: state => state.selectedNgo,
    getNgoFunds: state => state.ngoFunds,
    getNgoFundsHeaders: state => state.ngoFundsHeaders
  }
}
