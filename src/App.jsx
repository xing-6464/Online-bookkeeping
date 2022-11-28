import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from './logo.svg'
import './App.css'

import PriceList from './components/PriceList'

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
      <PriceList
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item)}}
      />
    </div>
  );
}

export default App
