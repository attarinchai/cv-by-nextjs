import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function page(){
  return (
    <>
    <div className="hidden w-full md:flex gap-20 justify-center items-center text-3xl">
      <div className="flex flex-col gap-5 font-bold">
        <h1 className="text-right">FACEBOOK</h1>
        <h1 className="text-right">EMAIL</h1>
        <h1 className="text-right">PHONE NUMBER</h1>
      </div>
      <div className="flex flex-col gap-5 tracking-wider">
        <Link href='https://www.facebook.com/attarinchai' 
              className="hover:text-red-500"
              target='_blank'>
                <h1>Attarinchai Rungmané</h1>
        </Link>
        <Link href='https://attarinchai_ru@outlook.co.th' 
              className="hover:text-red-500"
              target='_blank'>
                <h1>attarinchai_ru@outlook.co.th</h1>
        </Link>
        <h1 className="font-mono">096 697 9108</h1>
      </div>
    </div>
    <div className="h-full flex flex-col items-center gap-10 sm:hidden">
      <div>
        <Link href='https://www.facebook.com/attarinchai' 
              className="hover:text-red-500"
              target='_blank'>
                <h1><FontAwesomeIcon icon={faFacebook} /> Attarinchai Rungmané</h1>
        </Link>
      </div>
      <div>
        <Link href='https://attarinchai_ru@outlook.co.th' 
              className="hover:text-red-500"
              target='_blank'>
                <h1><FontAwesomeIcon icon={faEnvelope} /> attarinchai_ru@outlook.co.th</h1>
        </Link>
      </div>
      <div>
        <h1 className="font-mono"><FontAwesomeIcon icon={faPhone} /> 096 697 9108</h1>
      </div>
    </div>
    </>
  )
}