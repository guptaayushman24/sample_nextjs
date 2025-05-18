import {prisma} from '../lib/prisma'
export default async function Home() {
  const userschema = await prisma.user.findMany({})
  return(
    userschema.map((user)=>(
      <div key={user.id}>{user.name}</div>
    ))
  )
}
