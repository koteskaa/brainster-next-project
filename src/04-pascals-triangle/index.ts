export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1]
  } else if (rowIndex === 1) {
    return [1, 1]
  } else {
    const previousRow = getPascalsTriangleRow(rowIndex - 1)
    const row = [1]
    for (let i = 0; i < previousRow.length - 1; i++) {
      row.push(previousRow[i] + previousRow[i + 1])
    }
    row.push(1)
    return row
  }
}
