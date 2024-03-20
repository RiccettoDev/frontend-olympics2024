import { useEffect, useState, useRef, FormEvent } from "react"
import { api } from "../../services/api"
import { toast } from "sonner";

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

export default function FormCountryUpdate({id}: any){
  const [countries, setCountries] = useState<CountriesProps[]>([])
  const [name, setName] = useState<string>("");
  const [flag, setFlag] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [gold_medals, setGold_medals] = useState<string>("");
  const [silver_medals, setSilver_medals] = useState<string>("");
  const [bronze_medals, setBronze_medals] = useState<string>("");

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
    const country = response.data.find((country: CountriesProps) => country.id === id);
    if (country){
      setName(country.name);   
      setFlag(country.flag);   
      setDescription(country.description);   
      setGold_medals(country.gold_medals);   
      setSilver_medals(country.silver_medals);   
      setBronze_medals(country.bronze_medals);   
    } 
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    if(!nameRef.current?.value || !flagRef.current?.value || !descriptionRef.current?.value || !gold_medalsRef.current?.value || !silver_medalsRef.current?.value || !bronze_medalsRef.current?.value) return

    const response = await api.put(`/country/${id}`, {
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
    <form className="w-full flex flex-col p-4 items-center" onSubmit={handleSubmit}>
      <label className="font-bold text-white hidden">Nome:</label>
      <input 
        value={name}
        type="text"
        placeholder="Digite seu nome..."
        className="w-full mb-2 p-1 rounded hidden"
        ref={nameRef} 
      />
      <label className="font-bold text-white hidden">Bandeira:</label>
      <input 
        value={flag}
        type="text"
        placeholder="Adicione a URL da imagem da bandeira..."
        className="w-full mb-2 p-1 rounded hidden"
        ref={flagRef} 
      />
      <label className="font-bold text-white hidden">Descrição:</label>
      <input 
        value={description}
        type="text"
        placeholder="Digite a descrição..."
        className="w-full mb-2 p-1 rounded hidden"
        ref={descriptionRef} 
      />
      <label className="font-bold text-white">Medalhas de ouro atuais: {gold_medals}</label>
      <input 
        type="text"
        placeholder="Digite a quantidade de medalhas de ouro..."
        className="w-full mb-2 p-1 rounded"
        ref={gold_medalsRef} 
      />
      <label className="font-bold text-white">Medalhas de prata atuais: {silver_medals}</label>
      <input 
        type="text"
        placeholder="Digite a quantidade de medalhas de prata..."
        className="w-full mb-2 p-1 rounded"
        ref={silver_medalsRef} 
      />
      <label className="font-bold text-white">Medalhas de bronze atuais: {bronze_medals}</label>
      <input 
        type="text"
        placeholder="Digite a quantidade de medalhas de bronze..."
        className="w-full mb-2 p-1 rounded"
        ref={bronze_medalsRef} 
      />

      <input 
        type="submit"
        value="Atualizar"
        className="
          cursor-pointer 
          w-52 
          p-2 
          mt-6 
          bg-[#c0c0c0] 
          rounded 
          font-extrabold 
          text-indigo-800
          hover:scale-105
          active:opacity-45"
        onClick={() => toast.success('País Atualizado com sucesso!')}
      />
    </form>
  )
}