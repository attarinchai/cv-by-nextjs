import pic1 from '@/public/middleHighSchool.jpg'
import pic2 from '@/public/cmu-eng.webp'
import pic3_1 from '@/public/responsive-web-design.jpg'
import pic3_2 from '@/public/javaScript.jpg'
import pic3_3 from '@/public/front-end-development-libraries.jpg'
import pic3_4 from '@/public/data-visualization.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/ui/infopage.module.css'

export default function page(){
  return (
    <div className='w-full pt-[20] flex flex-col items-center gap-[20%] text-center overflow-y-scroll'>
      <div>
        <h1 className='font-bold'>HIGH SCHOOL</h1>
        <Image 
          src={pic1}
          alt='highschool pics'
          width={500}
          className='border-2 rounded-lg'
        />
        <p>chongfah xinseung school</p>
      </div>
      <div>
        <h1 className='font-bold'>UNIVERSITY</h1>
        <Image 
          src={pic2}
          alt='university'
          width={500}
          className='border-2 rounded-lg'
        />
        <p>faculty of engineering chiangmai university</p>
      </div>
      <div>
        <h1 className='font-bold'>ONLINE COURSE</h1>
        <div>
          <Link 
            href="https://www.freecodecamp.org/certification/fcc2c296ebb-625b-4768-b2e2-89053cf55932/responsive-web-design"  
            target='_blank'
            className='hover:invert'>
            <Image 
              src={pic3_1}
              alt='responsive web design'
              width={500}
              className={`border-2 rounded-lg ${styles.link}`}
            />
          </Link>
          <Link
            href="https://www.freecodecamp.org/certification/fcc2c296ebb-625b-4768-b2e2-89053cf55932/javascript-algorithms-and-data-structures"
            target='_blank'
            className='hover:invert'>
            <Image 
              src={pic3_2}
              alt='javaScript'
              width={500}
              className={`border-2 rounded-lg ${styles.link}`}
            />
          </Link>
          <Link
            href="https://www.freecodecamp.org/certification/fcc2c296ebb-625b-4768-b2e2-89053cf55932/front-end-development-libraries"
            target='_blank'
            className='hover:invert'>
            <Image 
            src={pic3_3}
            alt='front end development libraries'
            width={500}
            className={`border-2 rounded-lg ${styles.link}`}
            />
          </Link>
          <Link
            href="https://www.freecodecamp.org/certification/fcc2c296ebb-625b-4768-b2e2-89053cf55932/data-visualization"
            className='hover:invert'
            target='_blank'>
            <Image 
            src={pic3_4}
            alt='data visualization'
            width={500}
            className={`border-2 rounded-lg ${styles.link}`}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}