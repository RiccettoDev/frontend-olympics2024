import { useState } from "react"
import { FiTrash } from 'react-icons/fi'
import { LiaMedalSolid } from "react-icons/lia";
import { toast } from "sonner";

import { api } from "../../services/api"

import ModalCardUpdate from "./ModalCardUpdate";

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

export default function CardCountry({countryProps, loadCountry}: any){
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
      toast.success('País deletado com sucesso!')
      loadCountry()
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <article key={countryProps.id} className="w-[95%] flex flex-col bg-indigo-800 rounded p-2 m-2 relative hover:scale-105 duration-200 md:w-[45%] lg:w-[30%]">
              <div className='m-4 flex flex-col justify-center items-center text-gray-50'>
                <p className='my-2 text-2xl'><span className="font-bold">Nome:</span> {countryProps.name}</p>
                <div className='flex items-center justify-center my-6 shadow-2xl shadow-black'>
                  <img src={countryProps.flag} alt={`Flag: ${countryProps.name}`} className='rounded w-64'/>
                </div>
                <p><span className="font-bold">Descrição:</span> {countryProps.description}</p>
                <div className='flex mt-6 w-full justify-center '>
                  <p className="
                    flex 
                    items-center"
                  ><span className="
                    font-bold 
                    flex 
                    items-center 
                    mr-1"><LiaMedalSolid color="#efff0f" size={28} />Ouro:</span> {countryProps.gold_medals}</p>
                  <p className="
                    flex 
                    items-center 
                    ml-1"
                    ><span className="
                      font-bold 
                      flex 
                      items-center 
                      mr-1"><LiaMedalSolid color="#c0c0c0" size={28} />Prata:</span> {countryProps.silver_medals}</p>
                  <p className="
                    flex 
                    items-center 
                    ml-1"
                    ><span className="
                      font-bold 
                      flex 
                      items-center 
                      mr-1"><LiaMedalSolid color="#cd7f32" size={28} />Bronze:</span> {countryProps.bronze_medals}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(countryProps.id)} className='bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2'>
                <FiTrash size={18} color='#fff'/>
              </button>
              <button className='bg-slate-800 w-7 h-7 flex items-center justify-center rounded-lg absolute left-0 -top-2'>
                <ModalCardUpdate id={countryProps.id}/>
              </button>
          </article>
  )
}