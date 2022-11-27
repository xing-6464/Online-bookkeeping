import React from 'react'

const PriceList = ({
  items,
  onModifyItem,
  onDeleteItem
}) => {

  return (
    <ul className="list-group list-group-flush">
      {
        items.map(item => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center row"
            key={item.id}
          >
            <span className="col-1 badge bg-primary">
              { item.category.name }
            </span>
            <span className="col-5 text-center">{ item.title }</span>
            <span className="col-2 fw-bold">
              {(item.category.type === 'income') ? '+' : '-'}
              {item.price} 元
            </span>
            <span className="col-2">{ item.date }</span>
            <button
              className="col-1 btn btn-primary"
              onClick={() => onModifyItem(item)}
            >
              编辑
            </button>
            <button
              className="col-1 btn btn-danger"
              onClick={() => onDeleteItem(item)}
            >
              删除
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default PriceList
