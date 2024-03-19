import { useState, useRef, FormEvent } from "react"
import { api } from "../../services/api"
import { toast } from "sonner";

interface SportsProps{
  id: string;
  name: string;
  img: string;
  description: string;
  status: boolean;
  created_at: string;
}

export default function FormSportsCreate(){
  const [sports, setSports] = useState<SportsProps[]>([])

  const nameRef = useRef<HTMLInputElement | null>(null)
  const imgRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLInputElement | null>(null)

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    if(!nameRef.current?.value || !imgRef.current?.value || !descriptionRef.current?.value) return

    const response = await api.post('/sports', {
      name: nameRef.current?.value,
      img: imgRef.current?.value,
      description: descriptionRef.current?.value,
    })

    setSports(allSports => [...allSports, response.data])
    nameRef.current.value = ''
    imgRef.current.value = ''
    descriptionRef.current.value = ''
  }

  return(
    <form className="w-full flex flex-col p-4 items-center" onSubmit={handleSubmit}>
      <label className="font-bold text-white">Nome:</label>
      <input 
        type="text"
        placeholder="Digite o nome..."
        className="w-full mb-2 p-1 rounded"
        ref={nameRef} 
      />
      <label className="font-bold text-white">Imagem:</label>
      <input 
        type="text"
        placeholder="Adicione a URL da imagem do esporte..."
        className="w-full mb-2 p-1 rounded"
        ref={imgRef} 
      />
      <label className="font-bold text-white">Descrição:</label>
      <input 
        type="text"
        placeholder="Digite a descrição..."
        className="w-full mb-2 p-1 rounded"
        ref={descriptionRef} 
      />

      <input 
        type="submit"
        value="Cadastrar"
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
        onClick={() => toast.success('Esporte cadastrada com sucesso!')}
      />
    </form>
  )
}