import resolutionsMock from './resolutionsMock'
import fundsMock from './fundsMock'

/**
 * Section Api
 */
class Api {
  /* eslint-disable */
  /**
   * @static getAllResolutions - description
   *
   * @returns {type}  description
   */
  static getAllResolutions() {
    /* eslint-enable */
    return new Promise(resolve => {
      setTimeout(() => {
        /*
         * To update with a real API
         * just replace the url below with the real one.
         */
        // const url = ''
        //
        // fetch(url)
        //   .then(response => {
        //     console.log('RESP1', response)
        //     return response.json()
        //   })
        //   .then(response => {
        //     console.log('RESP', response)
        //     if (response.data.results) {
        //       resolve(Object.assign([], response.data.results))
        //     } else {
        //       reject()
        //     }
        //   })
        resolve(Object.assign({}, resolutionsMock))
      }, 1000)
    })
  }

  /* eslint-disable */
  /**
   * @static getAllFunds - description
   *
   * @returns {type}  description
   */
  static getAllFunds() {
    /* eslint-enable */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign({}, fundsMock))
      }, 500)
    })
  }
}

export default Api
