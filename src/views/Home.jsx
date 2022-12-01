import React from 'react'

import logo from '../logo.svg'
import {
  LIST_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME 
} from '../utility'
import {
  MonthPicker,
  PriceList,
  TotalPrice,
  ViewTab,
  CreateBtn
} from '../components'

const items = [
  {
    'id': 1,
    'title': '去云南旅游',
    'price': 200,
    'date': '2022-09-10',
    'category': {
      'id': '1',
      'name': '旅行',
      'type': 'outcome',
      'iconName': 'ios-plane'
    }
  },
  {
    'id': 2,
    'title': '去云南旅游',
    'price': 300,
    'date': '2022-09-10',
    'category': {
      'id': '1',
      'name': '旅行',
      'type': 'outcome',
      'iconName': 'ios-plane'
    }
  }
]

export const Home = () =>{

  let totalIncome = 0, totalOutcome = 0
  items.forEach(item => {
    if (item.category.type === TYPE_OUTCOME) {
      totalOutcome += item.price
    } else {
      totalIncome += item.price
    }
  })
  
  return (
    <>
      <header className="App-header">
        <div className="row mb-5">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <div className="col">
            <MonthPicker
              year={2022}
              month={12}
              onChange={() => {}}
            />
          </div>
          <div className="col">
            <TotalPrice
              income={totalIncome}
              outcome={totalOutcome}
            />
          </div>
        </div>
      </header>
      <div className="content-area py-3 px-3">
        <ViewTab
          activeTab={LIST_VIEW}
          onTabChange={() => {}}
        />
        <CreateBtn Click={() => {}}/>
        <PriceList
          items={items}
          onModifyItem={() => {}}
          onDeleteItem={() => {}}
        />
      </div>
    </>
  )
}
