import Api from '../services/Api'

export default {
  getEightk () {
    return Api().get('eightk')
  },

  getEightkByState (params) {
    return Api().get('eightk/' + params.state)
  }
}
