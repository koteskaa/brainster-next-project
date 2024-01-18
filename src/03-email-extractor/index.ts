type User = { id: number; name: string; email: string; age: number }

export const extractEmails = (users: (User | null | undefined)[]): string[] => {
  const emails: string[] = []

  if (users) {
    const uniqueEmailsSet = new Set<string>()
    for (const user of users) {
      if (user && user.email) {
        uniqueEmailsSet.add(user.email)
      }
    }
    uniqueEmailsSet.forEach((email) => {
      emails.push(email)
    })
  }

  return emails
}
