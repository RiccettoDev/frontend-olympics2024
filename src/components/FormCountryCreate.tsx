import { useState, useRef, FormEvent } from "react"
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

export default function FormCountryCreate(){
  const [countries, setCountries] = useState<CountriesProps[]>([])

  const nameRef = useRef<HTMLInputElement | null>(null)
  const flagRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLInputElement | null>(null)
  const gold_medalsRef = useRef<HTMLInputElement | null>(null)
  const silver_medalsRef = useRef<HTMLInputElement | null>(null)
  const bronze_medalsRef = useRef<HTMLInputElement | null>(null)

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

  return(
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
        className="cursor-pointer w-full p-2 bg-violet-700 rounded font-medium text-white" 
      />
    </form>
  )
}