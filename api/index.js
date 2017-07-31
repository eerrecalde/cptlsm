import resolutionsMock from './resolutionsMock'
import resolutionHeadersMock from './resolutionHeadersMock'
import ngosMock from './ngosMock'
import ngoFundsMock from './ngoFundsMock'
import ngoFundsHeadersMock from './ngoFundsHeadersMock'
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
  static getAllResolutions () {
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
        resolve(Object.assign([], resolutionsMock))
      }, 1000)
    })
  }

  /* eslint-disable */
  /**
   * @static getAllResolutionHeaders - description
   *
   * @returns {type}  description
   */
  static getAllResolutionHeaders () {
    /* eslint-enable */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], resolutionHeadersMock))
      }, 1000)
    })
  }

  /* eslint-disable */
  /**
   * @static getAllNgoFunds - description
   *
   * @returns {type}  description
   */
  static getAllNgoFunds (id) {
    /* eslint-enable */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], ngoFundsMock[id]))
      }, 1000)
    })
  }

  /**
   * @static getAllNgos - description
   *
   * @return {type}    description
   */
  static getAllNgos () {
    /* eslint-enable */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], ngosMock))
      }, 1000)
    })
  }

  /* eslint-disable */
  /**
   * @static getAllNgoFundsHeaders - description
   *
   * @returns {type}  description
   */
  static getAllNgoFundsHeaders () {
    /* eslint-enable */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], ngoFundsHeadersMock))
      }, 1000)
    })
  }

  /* eslint-disable */
  /**
   * @static getAllFunds - description
   *
   * @returns {type}  description
   */
  static getAllFunds () {
    /* eslint-enable */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], fundsMock))
      }, 500)
    })
  }
}

export default Api
