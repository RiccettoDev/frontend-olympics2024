import { useState, useEffect } from 'react'
import { api } from './services/api'

import ModalCard from './components/ModalCard'
import CardCountry from './components/CardCountry'

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

export default function App() {
  const [countries, setCountries] = useState<CountriesProps[]>([])

  useEffect(() => {
    loadCountries()
  }, [])

  async function loadCountries(){
    const response = await api.get('/countries')
    setCountries(response.data)    
  }

  return (
    <div className="w-full min-h-screen bg-indigo-950 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">

        <div className='text-center mb-6'>
          <h1 className="text-4xl font-medium text-white">Países</h1>
        </div>

        <ModalCard loadCountryWhenClose= {loadCountries}/>

        <section className="flex flex-wrap justify-between gap-4">
          {countries.map((country) => (
            <CardCountry countryProps={country} />
          ))}
        </section>
      </main>
    </div>
  )
}