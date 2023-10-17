import Card from '../components/Cards/Card'
import bgImg from '../assets/backgrounds/bgPersonas.png'

export default function Personas({
  children,
  bgColor,
}: {
  children: any
  bgColor: boolean
}) {
  return (
    <main
      id={bgColor ? 'personas' : 'inicio'}
      className="flex flex-col 
    justify-between items-center
    "
      style={{
        backgroundImage: `${bgColor ? `url(${bgImg})` : 'none'}`,
      }}
    >
      {children}
      <Card />
    </main>
  )
}
