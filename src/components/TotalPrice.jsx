import React from 'react'
import PropTypes from 'prop-types'

export const TotalPrice = ({
  income,
  outcome
}) => {

  return (
    <div className="container">
      <div className="row">
        <span className="col fs-3 text-center">
          收入：{income}元
        </span>
        <span className="col fs-3 text-center">
          支出：{outcome}元
        </span>
      </div>
    </div>
  )
}

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}
TotalPrice.defaultProps = {
  income: 0,
  outcome: 0
}
