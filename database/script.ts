import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "fred@systemike.com",
      password: "changeme",
      name: "Fred"
    },
  })
  console.log(user)

  const allUsers = await prisma.user.findMany({
  })
  console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })
