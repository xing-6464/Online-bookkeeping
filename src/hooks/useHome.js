import { useState } from 'react'
import {
  LIST_VIEW,
  TYPE_OUTCOME,
  padLeft,
  parseToYearAndMonth
} from '../utility'

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
    'date': '2022-11-10',
    'cid': 1
  },
  {
    'id': 2,
    'title': '去云南旅游',
    'price': 300,
    'date': '2022-12-10',
    'cid': 1
  }
]

const newItem = {
  'id': 3,
  'title': '添加新项目',
  'price': 300,
  'date': '2022-12-1',
  'cid': 2
}
export default function useHome() {
  const [items, setItems] = useState(itemss)
  const [currentDate, setCurrentDate] = useState(parseToYearAndMonth())
  const [tabView, setTabView] = useState(LIST_VIEW)

  const itemsWithCategory = items.map(item => {
    item.category = categoies[item.cid]
    return item
  }).filter(item => {
    return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
  })

  let totalIncome = 0, totalOutcome = 0
  itemsWithCategory.forEach(item => {
    if (item.category.type === TYPE_OUTCOME) {
      totalOutcome += item.price
    } else {
      totalIncome += item.price
    }
  })

  function changeView(view) {
    setTabView(view)
  }
  
  function changeDate(year, month) {
    setCurrentDate({year, month}) 
  }
  
  function modifyItem(modifedItem) {
    const modifedItems = items.map(item => {
      if (item.id === modifedItem.id) {
        return {...item, title: '更新后的标题'}
      } else {
        return item
      }
    })
    setItems(modifedItems)
  }
  
  function createItem() {
    setItems([newItem, ...items])
  }
  
  function deleteItem(deletedItem) {
    const filteredItems = items.filter(item => item.id !== deletedItem.id)
    setItems(filteredItems)
  }

  return {
    totalIncome,
    totalOutcome,
    itemsWithCategory,
    currentDate,
    tabView,
    changeView,
    changeDate,
    modifyItem,
    createItem,
    deleteItem
  }

}
