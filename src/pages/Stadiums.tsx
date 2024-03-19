import { useState, useEffect, useMemo } from "react";
import { api } from "../services/api";

import ModalCardStadium from "../components/stadium/ModalCardStadium";
import CardStadium from "../components/stadium/CardStadium";

interface StadiumProps{
  id: string;
  name: string;
  img: string;
  description: string;
  capacity: string;
  status: boolean;
  created_at: string;
}

export default function Stadiums(){
  const [stadium, setStadium] = useState<StadiumProps[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadStadium()
  }, [])

  async function loadStadium(){
    const response = await api.get('/stadium')
    setStadium(response.data)    
  }

  const filterStadium = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return stadium.filter((stadium) => stadium.name.toLowerCase().includes(lowerSearch))
  }, [stadium, search])

  return(
    <div className="w-full min-h-screen bg-[#c0c0c0] flex justify-center px-4">
      <main className="my-10 w-full">

        <div className='text-center mb-6'>
          <h1 className="text-[48px] font-extrabold text-indigo-800">Arenas</h1>
          <input 
            type="text" 
            value={search} 
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Digite sua busca'
            className='text-center rounded p-2 shadow-2xl shadow-black font-extrabold text-white bg-indigo-800' 
          />
        </div>

        <div className='w-full lg:ml-[42%]'>
          <ModalCardStadium loadStadiumWhenClose= {loadStadium}/>
        </div>

        <section className="flex flex-wrap justify-between gap-4 mt-12">
          {filterStadium.map((stadium) => (
            <CardStadium stadiumProps= {stadium} loadStadium= {loadStadium}/>
          ))}
        </section>
      </main>
    </div>
  )
}