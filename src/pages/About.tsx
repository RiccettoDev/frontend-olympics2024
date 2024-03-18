import CardAbout from '../components/CardAbout'

import olympics from '../assets/olympics.jpg'
import paris2024 from '../assets/paris2024.jpg'

export default function About(){
  return(
    <div className="w-full min-h-screen bg-[#c0c0c0] flex justify-center px-4">
      <main className="my-10 w-full">

        <div className='text-center mb-6'>
          <h1 className="text-[48px] font-extrabold text-indigo-800">Sobre</h1>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <CardAbout 
              title='Conheça algumas curiosidades sobre as Olimpíadas:'
              img={olympics}
              text1='As Olimpíadas na Antiguidade surgiram por volta de 776 a. C., conforme registros históricos. Entretanto, não há consenso entre os pesquisadores sobre um fato exato que tenha marcado o início dos jogos. Na Antiguidade, os jogos estavam associados a rituais religiosos. Nesse sentido, os gregos homenageavam Zeus, rei dos deuses na mitologia grega.'
              text2='Os jogos recebem esse nome, pois começaram na cidade grega de Olímpia, situada no sudoeste da Grécia. As competições aconteciam nos momentos de trégua, pois naquela época eram comuns conflitos entre as cidades-estado gregas. A situação de trégua era decretada dois meses antes dos jogos, que ocorriam também de quatro em quatro anos, só que sempre em uma mesma cidade, Olímpia.'
              text3='O anúncio do evento era dado por mensageiros em diferentes regiões, para que as pessoas pudessem viajar para Olímpia em segurança, já que os conflitos estariam interrompidos durante a competição.' 
              text4=''
            />
            <CardAbout
              title='Curiosidades sobre a próxima Olimpíada:'
              img={paris2024}
              text1='Com os jogos de 2024, Paris terá sido sede das olímpiadas por três vezes (1900, 1994 e 2024), a única com o feito ao lado de Londres (1908, 1948, 2012).'
              text2='Pela primeira vez na história, a cerimônia de abertura dos jogos não será feita em um estádio e sim no rio Sena, que cruza a cidade de país.'
              text3='Desde 2016, pessoas refugiadas integram uma nova equipe de competição em que não defendem nenhum país específico e sim como "equipe olímpica de refugiados" e também estarão presentes em 2024.'
              text4='Phryges foi escolhida como mascote dos Jogos Olímpicos de Paris. A inspiração são os famosos barrete frígio, chapéus associados a ideia de liberdade usado por franceses na época da Revolução.'
            />
          </div>
        </div>

      </main>
    </div>
  )
}