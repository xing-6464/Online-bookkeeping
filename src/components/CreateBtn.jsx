import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'

export const CreateBtn = ({ Click }) => (
  <div className="d-grid">
    <button
      className="btn btn-primary d-flex justify-content-center align-items-center" 
      onClick={(e) => {Click()}}
    >
      <Ionicon
        className="rounded-circle" 
        fontSize="30px"
        color='#fff'
        icon='ios-add-circle'
      />
      创建一条新的记账记录
    </button>
  </div>
)

CreateBtn.propTypes = {
  Click: PropTypes.func.isRequired,
}
