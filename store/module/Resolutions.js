import Api from '~/api'

export default {
  state: {
    resolutions: [],
    resolutionHeaders: []
  },

  actions: {
    FETCH_RESOLUTIONS: ({ commit }) => {
      commit('BEGIN_AJAX_CALL')
      return Api.getAllResolutions().then(resolutions => {
        commit('SET_RESOLUTIONS', { resolutions })
        commit('AJAX_CALL_FINISHED')
      }).catch(error => {
        commit('AJAX_CALL_FINISHED')
        throw error
      })
    },
    CLEAR_RESOLUTIONS: ({ commit }) => {
      var resolutions = []
      commit('SET_RESOLUTIONS', { resolutions })
    },
    FETCH_RESOLUTION_HEADERS: ({ commit }) => {
      commit('BEGIN_AJAX_CALL')
      return Api.getAllResolutionHeaders().then(resolutionHeaders => {
        commit('SET_RESOLUTION_HEADERS', { resolutionHeaders })
        commit('AJAX_CALL_FINISHED')
      }).catch(error => {
        commit('AJAX_CALL_FINISHED')
        throw error
      })
    }
  },

  mutations: {
    SET_RESOLUTIONS: (state, { resolutions }) => {
      state.resolutions = resolutions
    },
    SET_RESOLUTION_HEADERS: (state, { resolutionHeaders }) => {
      state.resolutionHeaders = resolutionHeaders
    }
  },

  getters: {
    getResolutionHeaders: state => state.resolutionHeaders,
    getResolutions: state => state.resolutions
  }
}
