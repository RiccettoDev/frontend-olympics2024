import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

export default function Header(){
  return(
    <div className="w-full flex justify-between bg-indigo-800 h-32">
      <div className='ml-6'>
        <Link to={'/'}>
          <img src={logo} alt="logo image" className='h-32 hover:scale-110 active:opacity-50'/>
        </Link>
      </div>
      <div className='flex items-center justify-center mr-14'>
        <ul className='flex'>
          <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/countries'}>Países</Link></li>
          <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/sports'}>Esportes</Link></li>
          <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/stadiums'}>Arenas</Link></li>
          <li className='p-4 text-white font-extrabold text-[24px] hover:scale-110 active:opacity-50'><Link to={'/about'}>Sobre</Link></li>
        </ul>
      </div>
    </div>
  )
}