import { useState } from "react"
import { FiTrash } from 'react-icons/fi'

import { api } from "../services/api"

interface CountriesProps{
  id: string;
  name: string;
  flag: string;
  description: string;
  gold_medals: string;
  silver_medals: string;
  bronze_medals: string;
  status: boolean;
  created_at: string;
}

export default function CardCountry({countryProps}: any){
  const [countries, setCountries] = useState<CountriesProps[]>([])

  async function handleDelete(id: string){
    try {
      await api.delete('/country', {
        params: {
          id: id
        }
      })

      const allCountries = countries.filter((country) => country.id !== id)
      setCountries(allCountries)
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <article key={countryProps.id} className="w-full flex bg-indigo-400 rounded p-2 relative hover:scale-105 duration-200">
              <div className='w-2/3 m-4 flex flex-col text-gray-50'>
                <p className='my-2'><span className="font-bold">Nome:</span> {countryProps.name}</p>
                <p><span className="font-bold">Descrição:</span> {countryProps.description}</p>
                <div className='flex my-2'>
                  <p><span className="font-bold">Ouro:</span> {countryProps.gold_medals}</p>
                  <p className='mx-4'><span className="font-bold">Prata:</span> {countryProps.silver_medals}</p>
                  <p className='mx-4'><span className="font-bold">Bronze:</span> {countryProps.bronze_medals}</p>
                </div>
                <p><span className="font-bold">Status:</span> {countryProps.status ? "ATIVO" : "INATIVO"}</p>
              </div>
              <div className='flex items-center justify-center'>
                <img src={countryProps.flag} alt={`Flag: ${countryProps.name}`} className='rounded w-64'/>
              </div>
              <button onClick={() => handleDelete(countryProps.id)} className='bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2'>
                <FiTrash size={18} color='#fff'/>
              </button>
          </article>
  )
}