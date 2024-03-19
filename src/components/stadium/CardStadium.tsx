import { useState } from "react"
import { FiTrash } from 'react-icons/fi'
import { FaPeopleGroup } from "react-icons/fa6";
import { toast } from "sonner";

import { api } from "../../services/api"

interface StadiumProps{
  id: string;
  name: string;
  img: string;
  description: string;
  capacity: string;
  status: boolean;
  created_at: string;
}

export default function CardStadium({stadiumProps, loadStadium}: any){
  const [stadium, setStadium] = useState<StadiumProps[]>([])

  async function handleDelete(id: string){
    try {
      await api.delete('/stadium', {
        params: {
          id: id
        }
      })

      const allStadium = stadium.filter((stadium) => stadium.id !== id)
      setStadium(allStadium)
      toast.success('Arena deletada com sucesso!')
      loadStadium()
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <article key={stadiumProps.id} className="w-[95%] flex flex-col bg-indigo-800 rounded p-2 m-2 relative hover:scale-105 duration-200 md:w-[45%] lg:w-[30%]">
              <div className='m-4 flex flex-col justify-center items-center text-gray-50'>
                <p className='my-2 text-2xl'><span className="font-bold">Nome:</span> {stadiumProps.name}</p>
                <div className='flex items-center justify-center my-6 shadow-2xl shadow-black'>
                  <img src={stadiumProps.img} alt={`Image: ${stadiumProps.name}`} className='rounded w-64'/>
                </div>
                <p><span className="font-bold">Descrição:</span> {stadiumProps.description}</p>
                <div className='flex mt-6 w-full justify-center '>
                  <p className="
                    flex 
                    items-center"
                  ><span className="
                    font-bold 
                    flex 
                    items-center 
                    mr-1"><FaPeopleGroup size={28} className="mr-2"/>Capacidade:</span> {stadiumProps.capacity}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(stadiumProps.id)} className='bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2'>
                <FiTrash size={18} color='#fff'/>
              </button>
          </article>
  )
}