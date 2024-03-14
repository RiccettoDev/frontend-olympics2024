import { useState, useEffect, useRef, FormEvent } from 'react'
import { FiTrash } from 'react-icons/fi'
import { api } from './services/api'

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
  const nameRef = useRef<HTMLInputElement | null>(null)
  const flagRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLInputElement | null>(null)
  const gold_medalsRef = useRef<HTMLInputElement | null>(null)
  const silver_medalsRef = useRef<HTMLInputElement | null>(null)
  const bronze_medalsRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    loadCountries()
  }, [])

  async function loadCountries(){
    const response = await api.get('/countries')
    setCountries(response.data)    
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    if(!nameRef.current?.value || !flagRef.current?.value || !descriptionRef.current?.value || !gold_medalsRef.current?.value || !silver_medalsRef.current?.value || !bronze_medalsRef.current?.value) return

    const response = await api.post('/country', {
      name: nameRef.current?.value,
      flag: flagRef.current?.value,
      description: descriptionRef.current?.value,
      gold_medals: gold_medalsRef.current?.value,
      silver_medals: silver_medalsRef.current?.value,
      bronze_medals: bronze_medalsRef.current?.value

    })

    setCountries(allCountries => [...allCountries, response.data])
    nameRef.current.value = ''
    flagRef.current.value = ''
    descriptionRef.current.value = ''
    gold_medalsRef.current.value = ''
    silver_medalsRef.current.value = ''
    bronze_medalsRef.current.value = ''
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

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Países</h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Nome:</label>
          <input 
            type="text"
            placeholder="Digite seu nome..."
            className="w-full mb-5 p-2 rounded"
            ref={nameRef} 
          />
          <label className="font-medium text-white">Bandeira:</label>
          <input 
            type="text"
            placeholder="Adicione a URL da bandeira..."
            className="w-full mb-5 p-2 rounded"
            ref={flagRef} 
          />
          <label className="font-medium text-white">Descrição:</label>
          <input 
            type="text"
            placeholder="Digite a descrição..."
            className="w-full mb-5 p-2 rounded"
            ref={descriptionRef} 
          />
          <label className="font-medium text-white">Medalhas de ouro:</label>
          <input 
            type="text"
            placeholder="Digite a quantidade de medalhas de ouro..."
            className="w-full mb-5 p-2 rounded"
            ref={gold_medalsRef} 
          />
          <label className="font-medium text-white">Medalhas de prata:</label>
          <input 
            type="text"
            placeholder="Digite a quantidade de medalhas de prata..."
            className="w-full mb-5 p-2 rounded"
            ref={silver_medalsRef} 
          />
          <label className="font-medium text-white">Medalhas de bronze:</label>
          <input 
            type="text"
            placeholder="Digite a quantidade de medalhas de bronze..."
            className="w-full mb-5 p-2 rounded"
            ref={bronze_medalsRef} 
          />

          <input 
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium" 
          />
        </form>

        <section className="flex flex-col gap-4">
          {countries.map((country) => (
            <article key={country.id} className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200">
              <p><span className="font-medium">Nome:</span> {country.name}</p>
              <p><span className="font-medium">Bandeira:</span> {country.flag}</p>
              <p><span className="font-medium">Descrição:</span> {country.description}</p>
              <p><span className="font-medium">Ouro:</span> {country.gold_medals}</p>
              <p><span className="font-medium">Prata:</span> {country.silver_medals}</p>
              <p><span className="font-medium">Bronze:</span> {country.bronze_medals}</p>
              <p><span className="font-medium">Status:</span> {country.status ? "ATIVO" : "INATIVO"}</p>
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