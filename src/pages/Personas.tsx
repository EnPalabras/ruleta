import Card from '../components/Cards/Card'
import bgImg from '../assets/backgrounds/bgPersonas.png'

export default function Personas({ children }: { children: any }) {
  return (
    <main
      id="personas"
      className="flex flex-col 
    justify-between items-center pb-8
    "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {children}
      <Card />
    </main>
  )
}
