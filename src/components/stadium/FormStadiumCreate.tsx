import { useState, useRef, FormEvent } from "react"
import { api } from "../../services/api"
import { toast } from "sonner";

interface StadiumProps{
  id: string;
  name: string;
  img: string;
  description: string;
  capacity: string;
  status: boolean;
  created_at: string;
}

export default function FormStadiumCreate(){
  const [stadium, setStadium] = useState<StadiumProps[]>([])

  const nameRef = useRef<HTMLInputElement | null>(null)
  const imgRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLInputElement | null>(null)
  const capacityRef = useRef<HTMLInputElement | null>(null)

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    if(!nameRef.current?.value || !imgRef.current?.value || !descriptionRef.current?.value || !capacityRef.current?.value) return

    const response = await api.post('/stadium', {
      name: nameRef.current?.value,
      img: imgRef.current?.value,
      description: descriptionRef.current?.value,
      capacity: capacityRef.current?.value,
    })

    setStadium(allStadium => [...allStadium, response.data])
    nameRef.current.value = ''
    imgRef.current.value = ''
    descriptionRef.current.value = ''
    capacityRef.current.value = ''
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
        placeholder="Adicione a URL da imagem da arena..."
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
      <label className="font-bold text-white">Capacidade:</label>
      <input 
        type="text"
        placeholder="Digite a capacidade da arena..."
        className="w-full mb-2 p-1 rounded"
        ref={capacityRef} 
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
        onClick={() => toast.success('Arena cadastrada com sucesso!')}
      />
    </form>
  )
}