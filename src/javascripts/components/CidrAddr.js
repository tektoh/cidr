import React from 'react'
import IpAddr from '../components/IpAddr'

export default ({ cidrAddr }) => (
  <div>
    {(() => {
      if (cidrAddr.isValid) {
        return (
          <dl>
            <dt>サブネット</dt>
            <dd><IpAddr nAddr={cidrAddr.networkAddr} />/{cidrAddr.mask}</dd>

            <dt>ネットマスク</dt>
            <dd><IpAddr nAddr={cidrAddr.maskAddr} /></dd>

            <dt>ネットワークアドレス</dt>
            <dd><IpAddr nAddr={cidrAddr.networkAddr} /></dd>

            <dt>ブロードキャストアドレス</dt>
            <dd><IpAddr nAddr={cidrAddr.broadcastAddr} /></dd>

            <dt>アドレスレンジ</dt>
            <dd>
              <IpAddr nAddr={cidrAddr.addrRangeStart} />
              <ShowIf visible={cidrAddr.addrRangeEnd}>
                {' '}〜{' '}
              </ShowIf>
              <ShowIf visible={cidrAddr.addrRangeEnd}>
                <IpAddr nAddr={cidrAddr.addrRangeEnd} />
              </ShowIf>
              <ShowIf visible={cidrAddr.addrRangeEnd}>
                {' '}({cidrAddr.addrRangeEnd - cidrAddr.addrRangeStart + 1}個)
              </ShowIf>
            </dd>
          </dl>
        )
      }
    })()}
  </div>
)

const ShowIf = ({ visible, children }) => <span>{visible ? children : null}</span>
