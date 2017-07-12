import Vuex from 'vuex'
import ResolutionsStore from '~/store/module/Resolutions'
import FundsStore from '~/store/module/Funds'

const store = () => {
  return new Vuex.Store({
    // Combine store sub-trees (modules)
    state: {
      ajaxCallInProgress: 0
    },
    modules: {
      resolutionsStore: ResolutionsStore,
      fundsStore: FundsStore
    },
    mutations: {
      BEGIN_AJAX_CALL: state => {
        state.ajaxCallInProgress += 1
      },

      AJAX_CALL_FINISHED: state => {
        state.ajaxCallInProgress -= 1
      }
    },
    plugins: [],
    strict: process.env.NODE_ENV !== 'production'
  })
}

export default store

// HMR this code get's removed in production
// more information on HMR here http://vuex.vuejs.org/en/hot-reload.html
/* istanbul ignore next */
if (module.hot) {
  /* eslint global-require: 0 */
  module.hot.accept([
  ], () => {
    // swap in the new parts of store
    store.hotUpdate({
      modules: {
      }
    })
  })
}
