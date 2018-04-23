import { handleActions } from 'redux-actions'
import { UPDATE } from '../actions/cidrAddr'

export default handleActions({
  [UPDATE]: (state, action) => {
    const { cidrAddr } = action.payload
    return {
      ...state,
      ...cidrAddr
    }
  }
}, {
  cidr: '',
  isValid: false
})
