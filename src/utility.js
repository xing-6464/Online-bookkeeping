export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'


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
