import { connect } from 'react-redux'
import CidrAddr from '../components/CidrAddr'

const mapStateToProps = (state) => {
  const { cidrAddr } = state
  let mask,
    maskAddr,
    networkAddr,
    broadcastAddr,
    addrRangeStart,
    addrRangeEnd

  if (cidrAddr.isValid) {
    const { cidr } = cidrAddr
    const [strAddr, strMask] = cidr.split('/')

    // Subnet Address
    let addrOctets = strAddr.split('.')
    let addr = parseInt(addrOctets[0]) * (1 << 24) +
      parseInt(addrOctets[1]) * (1 << 16) +
      parseInt(addrOctets[2]) * (1 << 8) +
      parseInt(addrOctets[3])

    // Subnet Mask
    mask = parseInt(strMask)
    maskAddr = 0
    for (let i = 1; i <= mask; i++) {
      maskAddr += 2 ** (32 - i)
    }

    // Network Address
    networkAddr = addr & maskAddr

    // Broadcast Address
    broadcastAddr = networkAddr
    for (let i = 0; i < (32 - mask); i++) {
      broadcastAddr += 2 ** i
    }

    // Address Range
    addrRangeStart = networkAddr + 1
    addrRangeEnd = broadcastAddr - 1
    if (mask > 30) {
      addrRangeStart = addr
      addrRangeEnd = null
    }
  }

  return {
    cidrAddr,
    mask,
    maskAddr,
    networkAddr,
    broadcastAddr,
    addrRangeStart,
    addrRangeEnd
  }
}

export default connect(
  mapStateToProps
)(CidrAddr)
