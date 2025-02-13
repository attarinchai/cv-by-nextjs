import Link from 'next/link'
import Image from 'next/image'
import yourFace from '../public/aomface.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import styles from './ui/home.module.css'

export default function Page() {
  return (
    <main className={`absolute w-full h-full ${styles.background} font-serif text-slate-600`}>
      <div className="flex flex-col h-full justify-center items-center sm:h-auto sm:flex-row sm:justify-evenly sm:mt-[30vh]">
        <div className='flex flex-col gap-5 items-center'>
          <h2 className='text-6xl sm:text-8xl'>HI THERE!!!</h2>
          <p className='text-5xl italic'>LET'S GET IN</p>
          <Link href='/timeline' 
                className={`w-[80%] h-[8vh] bg-red-500 border-2 border-red-900 rounded-2xl hover:bg-red-900 
                            hover:border-red-500 active:bg-red-200`}>
            <div className='h-[100%] text-3xl text-center'> 
              <span className='leading-[1.6]'>
                <FontAwesomeIcon className={styles.light2} icon={faCaretRight} />
                <FontAwesomeIcon className={styles.light3} icon={faCaretRight} />
                <FontAwesomeIcon className={styles.light4} icon={faCaretRight} />
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Image src={yourFace} className={`min-w-[200px] object-cover ${styles.jiggling}`} alt="its me bro" />
          <FontAwesomeIcon className={`relative text-7xl text-yellow-600 top-[-30%] ${styles.jiggling}`} icon={faThumbsUp} />
        </div>
      </div>
    </main>
  );
}
