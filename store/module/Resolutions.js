import Api from '~/api'

export default {
  state: {
    resolutions: {}
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
    }
  },

  mutations: {
    SET_RESOLUTIONS: (state, { resolutions }) => {
      state.resolutions = resolutions
    }
  },

  getters: {
    getResolutions: state => state.resolutions
  }
}
