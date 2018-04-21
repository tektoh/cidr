import { defineAction } from 'redux-define'
import { createActions } from 'redux-actions'

export const CIDR_ADDR = defineAction('CIDR_ADDR')

export const UPDATE = CIDR_ADDR.defineAction('UPDATE')

const { cidrAddr } = createActions({
  [UPDATE]: cidrAddr => ({ cidrAddr })
})

export default cidrAddr
