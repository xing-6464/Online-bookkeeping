import React, { useState } from 'react'

import logo from '../logo.svg'
import {
  LIST_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME,
  parseToYearAndMonth
} from '../utility'
import {
  MonthPicker,
  PriceList,
  TotalPrice,
  ViewTab,
  CreateBtn
} from '../components'
import useFunc from '../hooks/useFunc'

const categoies = {
  '1': {
    'id': '1',
    'name': '旅行',
    'type': 'outcome',
    'iconName': 'ios-plane',
  },
  '2': {
    'id': '2',
    'name': '理财',
    'type': 'income',
    'iconName': 'logo-yen'
  }
}

const itemss = [
  {
    'id': 1,
    'title': '去云南旅游',
    'price': 200,
    'date': '2022-09-10',
    'cid': 1
  },
  {
    'id': 2,
    'title': '去云南旅游',
    'price': 300,
    'date': '2022-09-10',
    'cid': 1
  }
]

export const Home = () =>{
  const [items, setItems] = useState(itemss)
  const [currentDate, setCurrentDate] = useState(parseToYearAndMonth())
  const [tabView, setTabView] = useState(LIST_VIEW)

  const itemsWithCategory = items.map(item => {
    item.category = categoies[item.cid]
    return item
  })

  let totalIncome = 0, totalOutcome = 0
  itemsWithCategory.forEach(item => {
    if (item.category.type === TYPE_OUTCOME) {
      totalOutcome += item.price
    } else {
      totalIncome += item.price
    }
  })
  
  const {
    changeView,
    changeDate,
    modifyItem,
    createItem,
    deleteItem
  } = useFunc()
  
  return (
    <>
      <header className="App-header">
        <div className="row mb-5">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <div className="col">
            <MonthPicker
              year={currentDate.year}
              month={currentDate.month}
              onChange={changeDate}
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
          activeTab={tabView}
          onTabChange={changeView}
        />
        <CreateBtn Click={createItem}/>
        <PriceList
          items={itemsWithCategory}
          onModifyItem={modifyItem}
          onDeleteItem={deleteItem}
        />
      </div>
    </>
  )
}
