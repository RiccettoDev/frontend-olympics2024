import useCountDown from "../hooks/useCountDown"

export default function Home() {

  const [day, hour, minute, second] = useCountDown(new Date('Fri, 26 Jul 2024 00:00:00 GMT'))

  return(
    <div className="w-full min-h-screen bg-[#c0c0c0] flex justify-center px-4">
      <main className="my-6 w-full">

        <div className='bg-home-background bg-cover w-full h-full rounded shadow-2xl shadow-black flex justify-center items-center'>

          <div className='bg-indigo-800 h-96 w-[340px] rounded opacity-50 relative lg:w-[600px] sm:w-[600px] lg:h-[420px]'>
          </div>
          <h1 className='text-white font-extrabold text-[48px] absolute drop-shadow-md shadow-black top-[285px] left-16 sm:top-[520px] sm:left-[150px] lg:top-[350px] lg:left-[370px] xl:top-[300px] '>Olimpiadas Paris 2024</h1>
          <div className='flex absolute pt-24 justify-center'>
            <div className='h-24 w-20 lg:mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{day}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black left-[5px] lg:left-[30px]'>Dias</h2>
            </div>
            <div className='h-24 w-20 lg:mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{hour}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black left-[80px] lg:left-[155px]'>Horas</h2>
            </div>
            <div className='h-24 w-20 lg:mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{minute}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black left-[170px] lg:left-[290px]'>Min</h2>
            </div>
            <div className='h-24 w-20 lg:mx-6'>
              <div className='h-20 w-16 bg-white rounded flex justify-center items-center'>
                <h1 className='font-extrabold text-2xl'>{second}</h1>
              </div>
              <h2 className='text-white font-extrabold text-2xl absolute drop-shadow-md shadow-black left-[250px] lg:left-[420px]'>Seg</h2>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}