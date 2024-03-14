import { useState, useEffect } from 'react'
import { FiTrash } from 'react-icons/fi'
import { api } from './services/api'
import FormCountryCreate from './components/FormCountryCreate' 

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

  async function handleAddCountry(newCountry: CountriesProps) {
    setCountries(prevCountries => [...prevCountries, newCountry])
  }

  return (
    <div className="w-full min-h-screen bg-indigo-950 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <div className='text-center mb-6'>
          <h1 className="text-4xl font-medium text-white">Países</h1>
        </div>

        <FormCountryCreate />

        <section className="flex flex-wrap justify-between gap-4">
          {countries.map((country) => (
            <article key={country.id} className="w-full flex bg-indigo-400 rounded p-2 relative hover:scale-105 duration-200">
              <div className='w-2/3 m-4 flex flex-col text-gray-50'>
                <p className='my-2'><span className="font-bold">Nome:</span> {country.name}</p>
                <p><span className="font-bold">Descrição:</span> {country.description}</p>
                <div className='flex my-2'>
                  <p><span className="font-bold">Ouro:</span> {country.gold_medals}</p>
                  <p className='mx-4'><span className="font-bold">Prata:</span> {country.silver_medals}</p>
                  <p className='mx-4'><span className="font-bold">Bronze:</span> {country.bronze_medals}</p>
                </div>
                <p><span className="font-bold">Status:</span> {country.status ? "ATIVO" : "INATIVO"}</p>
              </div>
              <div className='flex items-center justify-center'>
                <img src={country.flag} alt={`Flag: ${country.name}`} className='rounded w-64'/>
              </div>
              <button onClick={() => handleDelete(country.id)} className='bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2'>
                <FiTrash size={18} color='#fff'/>
              </button>
          </article>
          ))}
        </section>
      </main>
    </div>
  )
}