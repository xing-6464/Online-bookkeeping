export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TYPE_INCOME = 'income'
export const TYPE_OUTCOME = 'outcome'


export function padLeft (n) {
  return n < 10 ? '0' + n : n
}

export const range = (size, starAt = 0) => {
  const arr = []
  for (let i = 0; i < size; i++) {
    arr[i] = starAt + i
  }

  return arr
}
