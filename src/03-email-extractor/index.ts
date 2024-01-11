// index.ts
interface User {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: User[]): string[] {
  return users.map((user) => user.email)
}
