import { connect } from 'react-redux'
import cidrAddr from '../actions/cidrAddr'
import CidrAddrForm from '../components/CidrAddrForm'

const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange (event) {
      const cidr = event.target.value
      const regexp = /^(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-3]?[0-9])$/i

      dispatch(cidrAddr.update({
        cidr,
        isValid: regexp.test(cidr)
      }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CidrAddrForm)
