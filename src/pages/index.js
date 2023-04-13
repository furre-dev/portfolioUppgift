import Image from 'next/image'
import { Outfit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const outfit = Outfit({ subsets: ['latin'], })

export default function Home() {
  return (
    <>
      <main className="h-screen flex items-center max-w-[80%] mx-auto">
        <div className={outfit.className + " w-2/4 leftside font-semibold space-y-10"}>
          <div>
            <h1 className='text-8xl text-emerald-500 '>Furkan Abay</h1>
            <p className='text-3xl font-normal ml-[5px] text-emerald-500'>Front-end developer.</p>
          </div>
          <div className={outfit.className + ' downside flex space-x-10 font-semibold'}>
            <Link href={"/contact"} className='flex items-center justify-center  w-44 h-10 bg-emerald-600 rounded-lg text-white'>Contact me!</Link>
            <Link target='_blank' href={"https://www.github.com/furreabay"} className='flex items-center justify-center w-44 h-10 border-emerald-600 border-2 rounded-lg text-emerald-600'>My Github</Link>
          </div>
        </div>
        <div className='rightsiden w-2/4 flex justify-center'>
          <Image width={400} height={400} src={"/IMAGE.png"} />
        </div>
      </main >
    </>
  )
}
