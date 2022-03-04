import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// const NavItem: FunctionComponent<{
//    active: string
//    setActive: Function
//    name: string
//    route: string
// }> = ({ active, setActive, name, route }) => {
//    return active !== name ? (
//       <Link href={route}>
//          <a  className='prot-nav-btn'>
//             <span
//                className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
//                onClick={() => setActive(name)}>
//                {name}
//             </span>
//          </a>
//       </Link>
//    ) : null
// }

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')



   return (
      <div className='flex items-center px-5 py-3 my-3'>
         <div className='text-base font-normal md:text-xl'>
            <Link href={'/'}>
            <a  className='prot-nav-btn'>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>

               <span
                  className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
                  onClick={() => setActive("about")}>
                  {"about"}
               </span>
            </a>
         </Link>

         <Link href={'/resume'}>
            <a  className='prot-nav-btn'>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>


               <span
                  className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
                  onClick={() => setActive("Resume")}>
                  {"Resume"}
               </span>
            </a>
         </Link>
         <Link href={'/projects'}>
            <a  className='prot-nav-btn'>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>
            <span className='span-btn' ></span>

               <span
                  className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
                  onClick={() => setActive("Projects")}>
                  {"Projects"}
               </span>
            </a>
         </Link>
            
         </div>
      </div>
   )
}

export default Navbar
