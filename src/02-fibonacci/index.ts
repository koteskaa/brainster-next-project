// index.ts
export function fibonacci(n: number): number[] {
  if (n === 0) {
    return []
  } else if (n === 1) {
    return [0]
  }

  const sequence: number[] = [0, 1]

  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2]
    sequence.push(nextNumber)
  }

  return sequence
}
