import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseCircle } from "react-icons/io5";

import logo from '../assets/logo.png'
import menuMobile from '../assets/menuMobile.png'

export default function Header(){
  const [visible, setVisible] = useState(false)

  return(
    <div className="w-full flex justify-between bg-indigo-800 h-32">
      <div className='ml-6 absolute'>
        <Link to={'/'}>
          <img src={logo} alt="logo image" className='h-32 hover:scale-110 active:opacity-50'/>
        </Link>
      </div>
      <div className='flex items-center justify-center absolute right-48 top-8'>
        <div className='hidden md:block'>
          <ul className='flex'>
            <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/countries'}>Países</Link></li>
            <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/sports'}>Esportes</Link></li>
            <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/stadiums'}>Arenas</Link></li>
            <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/about'}>Sobre</Link></li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center md:hidden mr-6 absolute top-8 right-0'>
        <div className={!visible ? '' : 'hidden'}>
          <button onClick={() => setVisible(!visible)} className='hover:scale-110 active:opacity-45'>
            <img src={menuMobile} alt="Imagem menu hamburguer" className='w-14 h-14'/>
          </button>
        </div>
      </div>
      <div className={visible ? '' : 'hidden'}>
        <div className='flex flex-col w-[250px] h-full bg-[#c0c0c0] fixed top-0 right-0 z-50 justify-center items-center'>
          <button onClick={() => setVisible(!visible)} className='flex fixed top-4 right-4 hover:scale-125 active:opacity-40'>
            <IoCloseCircle size={'50px'}  color='#3720a3'/>
          </button>
          <ul className='flex flex-col'>
            <li>
              <button className='p-4 bg-indigo-800 rounded-3xl my-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'>
                <Link onClick={() => setVisible(!visible)} to={'/countries'}>Países</Link>
              </button>
            </li>
            <li>
              <button className='p-4 bg-indigo-800 rounded-3xl my-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'>
                <Link onClick={() => setVisible(!visible)} to={'/sports'}>Esportes</Link>
              </button>
            </li>
            <li>
              <button className='p-4 bg-indigo-800 rounded-3xl my-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'>
                <Link onClick={() => setVisible(!visible)} to={'/stadiums'}>Arenas</Link>
              </button>
            </li>
            <li>
              <button className='p-4 bg-indigo-800 rounded-3xl my-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'>
                <Link onClick={() => setVisible(!visible)} to={'/about'}>Sobre</Link>
              </button>
            </li>
          </ul>
        </div>
        <div className='bg-black flex h-full w-full fixed top-0 right-0 z-40 opacity-70'></div>
      </div>
    </div>
  )
}