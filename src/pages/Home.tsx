import useCountDown from "../hooks/useCountDown"

export default function Home() {

  const [day, hour, minute, second] = useCountDown(new Date('Fri, 26 Jul 2024 00:00:00 GMT'))

  return(
    <div className="w-full min-h-screen bg-[#c0c0c0] flex justify-center px-4">
      <main className="my-6 w-full">

        <div className='bg-home-background bg-cover w-full h-full rounded shadow-2xl shadow-black flex justify-center items-center'>

          <div className='bg-indigo-800 h-80 w-[600px] rounded opacity-50 relative'>
          </div>
          <h1 className='text-white font-extrabold text-[48px] absolute drop-shadow-md shadow-black top-72'>Olimpiadas Paris 2024</h1>
          <div className='flex absolute pt-12'>
            <div className='h-24 w-20 mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{day}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black'>Dias</h2>
            </div>
            <div className='h-24 w-20 mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{hour}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black'>Horas</h2>
            </div>
            <div className='h-24 w-20 mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{minute}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black'>Minutos</h2>
            </div>
            <div className='h-24 w-20 mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{second}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black'>Segundos</h2>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}