import styles from '../ui/timeline.module.css'
import Link from "next/link";

export default function Layout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="bg-gradient-to-b from-orange-600 via-cyan-200 to-teal-800">
      {children}
    <Link className={`absolute top-0 left-[35vw] md:left-[45vw] bg-white border-2 border-white rounded-md font-extrabold hover:text-white hover:bg-black hover:border-black ${styles.running_in_2}`}
          href="/infopage">CLICK TO INFO PAGE</Link>
    </div>
  );
}