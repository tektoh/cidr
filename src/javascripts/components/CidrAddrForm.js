import React from 'react'

export default ({ cidrAddr, handleChange }) => (
  <form>
    <div className="form-group">
      <label htmlFor="cidr-addr">CIDR</label>
      <input
        id="cidr-addr"
        placeholder="0.0.0.0/0"
        type="text"
        value={cidrAddr.cidr}
        onChange={handleChange}
        className={cidrAddr.isValid ? 'form-control' : 'form-control is-invalid'}
      />
    </div>
  </form>
)
