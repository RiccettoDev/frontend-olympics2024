import logo from '../assets/logo.png'

export default function Header2(){
  return(
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className='flex-shrink-0'>
                <img src={logo} alt="Imagem Logo" className='h-20 w-20'/>
              </a>
              <div className=''>
                <div className='hidden md:block'>
                  <a href="#">Pais</a>
                  <a href="#">Estadios</a>
                  <a href="#">Esportes</a>
                  <a href="#">Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}