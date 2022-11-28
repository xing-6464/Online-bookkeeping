import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from './logo.svg'
import './App.css'

import { LIST_VIEW, CHART_VIEW } from './utility'
import {
  PriceList,
  ViewTab
} from './components'

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">在线记账</h1>
      </header>
      <ViewTab
        activeTab={LIST_VIEW}
        onTabChange={(view) => { console.log(view) }}
      />
      {/* <PriceList
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item)}}
      /> */}
    </div>
  );
}

export default App
