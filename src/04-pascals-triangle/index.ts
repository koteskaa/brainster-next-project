// index.ts
export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex < 0) {
    throw new Error('Row index must be non-negative.')
  }

  const row: number[] = []

  for (let i = 0; i <= rowIndex; i++) {
    let coefficient = 1

    for (let j = 0; j <= i; j++) {
      if (row[j] !== undefined) {
        coefficient = (coefficient * (i - j)) / (j + 1)
      }
    }

    row.push(coefficient)
  }

  return row
}
