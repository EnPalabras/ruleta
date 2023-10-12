import Card from '../components/Cards/Card'
import bgImg from '../assets/backgrounds/bgEmpresas.png'

export default function Empresas({ children }: { children: any }) {
  return (
    <main
      id="empresas"
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
