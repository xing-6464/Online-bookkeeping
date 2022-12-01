import React from 'react'

import logo from '../logo.svg'
import {
  LIST_VIEW,
  CHART_VIEW
} from '../utility'
import {
  MonthPicker,
  PriceList,
  TotalPrice,
  ViewTab,
  CreateBtn
} from '../components'
import useHome from '../hooks/useHome'

export const Home = () =>{
  const {
    currentDate,
    tabView,
    totalIncome,
    totalOutcome,
    itemsWithCategory,
    changeView,
    changeDate,
    modifyItem,
    createItem,
    deleteItem
  } = useHome()
  
  return (
    <div className="bg-white">
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
        { tabView === LIST_VIEW && (
            <PriceList
              items={itemsWithCategory}
              onModifyItem={modifyItem}
              onDeleteItem={deleteItem}
            />
        )}
        { tabView === CHART_VIEW && (
            <h1>这里是图表</h1>
        )}
      </div>
    </div>
  )
}
