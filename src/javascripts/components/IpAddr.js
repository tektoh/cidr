import React from 'react'

export default ({ nAddr }) => (
  <span>{ntoa(nAddr)}</span>
)

const ntoa = nAddr => {
  let octs = []
  for (let oct = 3; oct >= 0; oct--) {
    octs.push(parseInt(nAddr) >> 8 * oct & 255)
  }
  return octs.join('.')
}
