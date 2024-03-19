import { useState } from "react"
import { FiTrash } from 'react-icons/fi'
import { toast } from "sonner";

import { api } from "../../services/api"

interface SportsProps{
  id: string;
  name: string;
  img: string;
  description: string;
  status: boolean;
  created_at: string;
}

export default function CardSports({sportsProps, loadSports}: any){
  const [sports, setSports] = useState<SportsProps[]>([])

  async function handleDelete(id: string){
    try {
      await api.delete('/sports', {
        params: {
          id: id
        }
      })

      const allSports = sports.filter((sports) => sports.id !== id)
      setSports(allSports)
      toast.success('Esporte deletada com sucesso!')
      loadSports()
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <article key={sportsProps.id} className="w-[95%] flex flex-col bg-indigo-800 rounded p-2 m-2 relative hover:scale-105 duration-200 md:w-[45%] lg:w-[30%]">
      <div className='m-4 flex flex-col justify-center items-center text-gray-50'>
        <p className='my-2 text-2xl'><span className="font-bold">Nome:</span> {sportsProps.name}</p>
        <div className='flex items-center justify-center rounded-full my-6 shadow-2xl shadow-black'>
          <img src={sportsProps.img} alt={`Image: ${sportsProps.name}`} className='rounded-full w-64'/>
        </div>
        <p><span className="font-bold">Descrição:</span> {sportsProps.description}</p>
      </div>
      <button onClick={() => handleDelete(sportsProps.id)} className='bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2'>
        <FiTrash size={18} color='#fff'/>
      </button>
    </article>
  )
}