interface CardAboutProps{
  title: string
  img: any
  text1: string
  text2: string
  text3: string
  text4: string
}

export default function CardAbout({title, img, text1, text2, text3, text4}: CardAboutProps){
  return(
    <div className="flex flex-col w-[90%] justify-center items-center m-4 bg-indigo-800 p-8 rounded-md shadow-2xl shadow-black">
      <div className='flex flex-col justify-center items-center rounded bg-indigo-500 p-8 shadow-2xl shadow-black'>
        <h2 className='text-[20px] font-extrabold text-white mb-4 md:text-[24px]'>{title}</h2>
        <img src={img} alt="Imagem Olimpiadas 2024" className='rounded w-[85%] mb-6 shadow-2xl shadow-black'/>
        <h3 className='text-[16px] font-extrabold text-white mb-4 md:text-[22px]'>
          {text1}
        </h3>
        <h3 className='text-[16px] font-extrabold text-white mb-4 md:text-[22px]'>
          {text2}
        </h3>
        <h3 className='text-[16px] font-extrabold text-white mb-4 md:text-[22px]'>
          {text3}
        </h3>
        <h3 className='text-[16px] font-extrabold text-white mb-4 md:text-[22px]'>
          {text4}
        </h3>
      </div>
    </div>
  )
}