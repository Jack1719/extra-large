import { prisma } from "@/prisma/db"

export default async function Home() {
  const posts = await prisma.post.findMany();
  return (
    <div>{
      JSON.stringify(posts)
    }</div>
  )
}
