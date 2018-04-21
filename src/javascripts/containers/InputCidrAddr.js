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
      const nextState = { cidr }

      const regexp = /^(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-3]?[0-9])$/i

      if (regexp.test(cidr)) {
        const [strAddr, strMask] = cidr.split('/')

        let addr = 0

        let addrOctets = strAddr.split('.')
        addr = parseInt(addrOctets[0]) * (1 << 24) +
          parseInt(addrOctets[1]) * (1 << 16) +
          parseInt(addrOctets[2]) * (1 << 8) +
          parseInt(addrOctets[3])

        let mask = parseInt(strMask)
        let maskAddr = 0
        for (let i = 1; i <= mask; i++) {
          maskAddr += 2 ** (32 - i)
        }

        let networkAddr = addr & maskAddr

        let broadcastAddr = networkAddr
        for (let i = 0; i < (32 - mask); i++) {
          broadcastAddr += 2 ** i
        }

        let addrRangeStart = networkAddr + 1
        let addrRangeEnd = broadcastAddr - 1

        if (mask > 30) {
          addrRangeStart = addr
          addrRangeEnd = null
        }

        Object.assign(nextState, {
          addr,
          mask,
          maskAddr,
          networkAddr,
          broadcastAddr,
          addrRangeStart,
          addrRangeEnd,
          isValid: true
        })
      } else {
        nextState.isValid = false
      }
      dispatch(cidrAddr.update(nextState))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CidrAddrForm)
