import portrait from '@/public/me.jpg'
import Image from 'next/image'
import Link from 'next/link'
export default function Page(){
  return (
    <div className="m-auto w-full tracking-wide">
      <div className='w-full fixed bottom-0 text-center'>
        <p className='bg-gray-300'>see transcript
          <Link className="text-blue-800 underline ml-2" key="transcript" href='transcript.pdf' target="_blank">link</Link>
        </p>
        <p className="bg-gray-400">see toeic score report(expired)
          <Link className="text-blue-800 underline ml-2" key="toeic" href="toeic_report.jpg" target="_blank">link</Link>
        </p>
      </div>
      <div className='sm:flex sm:justify-center gap-[5%]'>
        <Image src={portrait} 
               alt='its him' 
               width={200}
               className='m-auto sm:m-0 object-contain border-2'
        />
        <div className='sm:flex flex-col justify-evenly sm:text-right'>
          <p>name: </p>
          <p>surname: </p>
          <p>age: </p>
          <p>Current Address: </p>
          <p>military status: </p>
          <p>Marital Status: </p>
        </div>
        <div className='float-right mt-[-170px] mr-[50px] sm:float:none sm:mt-0 sm:mr-0 sm:flex flex-col justify-evenly'>
          <p>Attarinchai</p>
          <p>Rungmanee</p>
          <p>27</p>
          <p>Chiang Mai</p>
          <p>Conscripted</p>
          <p>Single</p>
        </div>
      </div>
      <p className='w-full sm:w-[40%] m-auto mt-[5%]'>after the graduation, moved back home, keep on family business, however due to financial situation, i was realized ... the Engineer is calling</p>
    </div>
  )
}