import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import { padLeft } from '../utility'

export const MonthPicker = ({
  year,
  month
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleDropdown = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown month-picker-component">
      <h4>现在月份</h4>
      <button
        className="btn btn-lg btn-secondary dropdown-toggle"
        onClick={toggleDropdown}
      >
        {`${year}年 ${padLeft(month)}月`}
      </button>
      { isOpen && (
          <div className="dropdown-menu" style={{ display: 'block' }}>
            <div className="row">
              <div className="col border-end">
                <h2>hello</h2>
              </div>
              <div className="col">
                <h2>hello</h2>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
