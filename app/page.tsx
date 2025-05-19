import {prisma} from '../lib/prisma'
export default async function Home() {
  // const userschema = await prisma.user.findMany({})
  // console.log(userschema);
  // return(
  //   userschema.map((user)=>(
  //     <div key={user.id}>{user.name}</div>
  //   ))
  // )
  return(
    <div>
        Hello
    </div>
  )
}
