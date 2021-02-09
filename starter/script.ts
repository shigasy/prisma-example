import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  // const post = await prisma.post.create({
  //   data: {
  //     // 入力するところまで型で補完が効く、すごい
  //     title: 'Prisma title',
  //     author: {
  //       // 既存のレコード（今回はリレーションされているUser）と接続するの柔軟でいい。見つからない場合例外スロー
  //       connect: { email: 'sarah@prisma.io'}
  //     }
  //   }
  // })

  const user = await prisma.user.create({
    data: {
      name: 'name',
      email: 'b@b.com',
    }
  })

  // const post = await prisma.post.update({
    // where: {id: 2},
    // data: { published: true },
  // })
  // console.log(post)


  const allUsers = await prisma.user.findMany({ include: { posts: true }})
  console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
