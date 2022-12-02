import React from 'react'
import { screen, render } from '@testing-library/react'
import { TotalPrice } from '../TotalPrice'

const props = {
  income: 1000,
  outcome: 2000
}

describe('Test TotalPrice component', () => {
  it ('component should render correct income&outcome number', () => {
    render(<TotalPrice {...props} />)

    const elment1 = screen.getByText('收入：1000元')
    const elment2 = screen.getByText('支出：2000元')
    expect(elment1).toBeInTheDocument()
    expect(elment2).toBeInTheDocument()
    expect(elment1.innerHTML).toEqual('收入：1000元')
    expect(elment2.innerHTML).toEqual('支出：2000元')
  })
})
