import intern from '@/public/intern.jpg'
import Image from 'next/image'

export default function page(){
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='font-sans font-bold text-xl mb-10'>7-ELEVEN RDC LAMPHUN</h1>
      <Image src={intern} width={600} alt="rdc lamphun" />
      <p>from//www.bangkoksync.com</p>
    </div>
  )
}