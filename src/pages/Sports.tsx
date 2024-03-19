import { useState, useEffect, useMemo } from "react";
import { api } from "../services/api";

import ModalCardSports from "../components/sports/ModalCardSports";
import CardSports from "../components/sports/CardSports";

interface SportsProps{
  id: string;
  name: string;
  img: string;
  description: string;
  status: boolean;
  created_at: string;
}

export default function Sports(){
  const [sports, setSports] = useState<SportsProps[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadSports()
  }, [])

  async function loadSports(){
    const response = await api.get('/sports')
    setSports(response.data)    
  }

  const filterSports = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return sports.filter((sports) => sports.name.toLowerCase().includes(lowerSearch))
  }, [sports, search])

  return(
    <div className="w-full min-h-screen bg-[#c0c0c0] flex justify-center px-4">
      <main className="my-10 w-full">

        <div className='text-center mb-6'>
          <h1 className="text-[48px] font-extrabold text-indigo-800">Esportes</h1>
          <input 
            type="text" 
            value={search} 
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Digite sua busca'
            className='text-center rounded p-2 shadow-2xl shadow-black font-extrabold text-white bg-indigo-800' 
          />
        </div>

        <div className='w-full lg:ml-[42%]'>
          <ModalCardSports loadSportsWhenClose= {loadSports}/>
        </div>

        <section className="flex flex-wrap justify-between gap-4 mt-12">
          {filterSports.map((sports) => (
            <CardSports sportsProps = {sports} loadSports= {loadSports}/>
          ))}
        </section>
      </main>
    </div>
  )
}