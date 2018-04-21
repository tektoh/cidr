import React from 'react'

export default ({ cidrAddr }) => (
  <div>
    {(() => {
      if (cidrAddr.isValid) {
        return (
          <dl>
            <dt>サブネット</dt>
            <dd>{ntoa(cidrAddr.networkAddr)}/{cidrAddr.mask}</dd>

            <dt>ネットマスク</dt>
            <dd>{ntoa(cidrAddr.maskAddr)}</dd>

            <dt>ネットワークアドレス</dt>
            <dd>{ntoa(cidrAddr.networkAddr)}</dd>

            <dt>ブロードキャストアドレス</dt>
            <dd>{ntoa(cidrAddr.broadcastAddr)}</dd>

            <dt>アドレスレンジ</dt>
            <dd>
              {ntoa(cidrAddr.addrRangeStart)}
              {(() => {
                if (cidrAddr.addrRangeEnd) {
                  return <span>〜</span>
                }
              })()}
              {(() => {
                if (cidrAddr.addrRangeEnd) {
                  return <span>{ntoa(cidrAddr.addrRangeEnd)}</span>
                }
              })()}
            </dd>
          </dl>
        )
      }
    })()}
  </div>
)

const ntoa = nAddr => {
  let addrs = []
  for (let oct = 3; oct >= 0; oct--) {
    addrs.push(nAddr >> 8 * oct & 255)
  }
  return addrs.join('.')
}
