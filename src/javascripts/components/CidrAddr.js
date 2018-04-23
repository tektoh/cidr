import React from 'react'
import IpAddr from '../components/IpAddr'

export default (
  {
    cidrAddr,
    mask,
    maskAddr,
    networkAddr,
    broadcastAddr,
    addrRangeStart,
    addrRangeEnd
  }
) => (
  <div>
    {(() => {
      if (cidrAddr.isValid) {
        return (
          <dl>
            <dt>サブネット</dt>
            <dd><IpAddr nAddr={networkAddr} />/{mask}</dd>

            <dt>ネットマスク</dt>
            <dd><IpAddr nAddr={maskAddr} /></dd>

            <dt>ネットワークアドレス</dt>
            <dd><IpAddr nAddr={networkAddr} /></dd>

            <dt>ブロードキャストアドレス</dt>
            <dd><IpAddr nAddr={broadcastAddr} /></dd>

            <dt>アドレスレンジ</dt>
            <dd>
              <IpAddr nAddr={addrRangeStart} />
              <ShowIf visible={addrRangeEnd}>
                {' '}〜{' '}
              </ShowIf>
              <ShowIf visible={addrRangeEnd}>
                <IpAddr nAddr={addrRangeEnd} />
              </ShowIf>
              <ShowIf visible={addrRangeEnd}>
                {' '}({addrRangeEnd - addrRangeStart + 1}個)
              </ShowIf>
            </dd>
          </dl>
        )
      }
    })()}
  </div>
)

const ShowIf = ({ visible, children }) => <span>{visible ? children : null}</span>
