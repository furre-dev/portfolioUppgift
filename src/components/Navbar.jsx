import { Outfit } from 'next/font/google'
import Link from 'next/link'
const outfit = Outfit({ subsets: ['latin'], })


export default function Navbar() {
    return (
        <div className='py-5 fixed top-0 left-0 flex justify-between w-full px-5'>
            <h1 className={outfit.className + " font-bold text-xl text-emerald-700"}>FURKAN <span className='text-emerald-500'>ABAY</span></h1>
            <ul className={outfit.className + ' flex space-x-10 text-emerald-800'}>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
                <li><Link target='_blank' href={"https://www.github.com/furreabay"}>Github</Link></li>
            </ul>
        </div>
    )
}