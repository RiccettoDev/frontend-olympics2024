import { useState, useEffect, useMemo } from 'react'
import { api } from '../services/api'

import ModalCard from '../components/ModalCard'
import CardCountry from '../components/CardCountry'

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

export default function Countries() {
  const [countries, setCountries] = useState<CountriesProps[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadCountries()
  }, [])

  async function loadCountries(){
    const response = await api.get('/countries')
    setCountries(response.data)    
  }

  const filterCountries = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return countries.filter((country) => country.name.toLowerCase().includes(lowerSearch))
  }, [countries, search])

  return (
    <div className="w-full min-h-screen bg-[#c0c0c0] flex justify-center px-4">
      <main className="my-10 w-full">

        <div className='text-center mb-6'>
          <h1 className="text-[48px] font-extrabold text-indigo-800">Países</h1>
          <input 
            type="text" 
            value={search} 
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Digite sua busca'
            className='text-center rounded p-2 shadow-2xl shadow-black font-extrabold text-white bg-indigo-800' 
          />
        </div>

        <div className='w-full lg:ml-[42%]'>
          <ModalCard loadCountryWhenClose= {loadCountries}/>
        </div>

        <section className="flex flex-wrap justify-between gap-4 mt-12">
          {filterCountries.map((country) => (
            <CardCountry countryProps= {country} loadCountry= {loadCountries}/>
          ))}
        </section>
      </main>
    </div>
  )
}