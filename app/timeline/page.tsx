import styles from '../ui/timeline.module.css'

export default function page2(){
  return( 
   <>
    <svg className='hidden sm:block' width='100vw' height='100vh'>
      <rect x='4vw' y='46vh' width='30vw' height='1vh' fill='rgb(0, 255, 0)' 
            className={styles.fade_from_left}
      />
      <rect x='35vw' y='46vh' width='30vw' height='1vh' fill='rgb(0, 225, 255)' 
            className={styles.fade_from_left}
      />
      <rect x='66vw' y='46vh' width='30vw' height='1vh' fill='rgb(218, 0, 0)' 
            className={styles.fade_from_left}
      />
      <text x='4vw' y='45vh' className={styles.running_in}>HIGH SCHOOL</text>
      <text x='35vw' y='45vh' className={styles.running_in}>UNIVERSITY</text>
      <text x='66vw' y='45vh' className={styles.running_in}>CURRENT</text>
      <line x1='34vw' y1='45vh' x2='34vw' y2='25vh' stroke='rgba(0, 0, 0, 0.38)' strokeWidth='1.5' 
            className={styles.fade_from_bottom}
      />
      <line x1='65vw' y1='48vh' x2='65vw' y2='68vh' stroke='rgba(0, 0, 0, 0.38)' strokeWidth='1.5' 
            className={styles.fade_from_top}
      />
      <line x1='96vw' y1='45vh' x2='96vw' y2='25vh' stroke='rgba(0, 0, 0, 0.38)' strokeWidth='1.5' 
            className={styles.fade_from_bottom}
      />
      <text x='14vw' y='20vh' fill='rgb(0, 0, 0)' fontWeight='bold' 
            className={styles.running_in}>CHONGFAH XINSEUNG SCHOOL</text>
      <text x='14vw' y='23vh' fill='rgb(255, 255, 255)'
            className={styles.running_in}>2005-2016</text>
      <text x='49vw' y='70vh' fill='rgb(0, 0, 0)' fontWeight='bold'
            className={styles.running_in}>CHIANGMAI UNIVERSITY</text>
      <text x='49vw' y='73vh' fill='rgb(255, 255, 255)'
            className={styles.running_in}>2016-2020</text>
      <text x='84vw' y='20vh' fill='rgb(0, 0, 0)' fontWeight='bold'
            className={styles.running_in}>FAMILY BUSINESS</text>
      <text x='84vw' y='23vh' fill='rgb(255, 255, 255)'
            className={styles.running_in}>2020-NOW</text>
    </svg>
    <div className='w-full h-[100vh] block flex flex-col justify-center items-center gap-10 sm:hidden'>
      <h1 className='block w-full text-center text-3xl font-bold italic sm:hidden'>BRIEF</h1>
      <div className='bg-white rounded-lg'>
        <h2>2005 - 2016</h2>
        <p>HIGH SCHOOL at CHONGFAH XINSEUNG SCHOOL</p>
      </div>
      <div className='bg-white rounded-lg'>
        <h2>2016 - 2020</h2>
        <p>graduated from CHIANGMAI UNIVERSITY as Engineer</p>
      </div>
      <div className='bg-white rounded-lg'>
        <h2>2020 - NOW</h2>
        <p>FAMILY BUSINESS</p>
      </div>
    </div>
    </>
  )
}