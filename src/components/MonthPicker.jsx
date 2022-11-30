import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'

export const MonthPicker = ({
  year,
  month
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const monthRange = range(12, 1)
  const yearRange = range(9, -4).map(number => number + year)

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
                { yearRange.map((yearNumber, index) => (
                  <a href="#" className="dropdown-item" key={index}>
                    { yearNumber } 年
                  </a>
                ))}
              </div>
              <div className="col">
                { monthRange.map((monthNumber, index) => (
                  <a href="#" className="dropdown-item" key={index}>
                    { padLeft(monthNumber) } 月
                  </a>
                ))}
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
