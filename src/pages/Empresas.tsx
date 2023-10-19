import Card from '../components/Cards/Card'
import bgImg from '../assets/backgrounds/bgCielo.jpg'

export default function Empresas({
  children,
  bgColor,
}: {
  children: any
  bgColor: boolean
}) {
  return (
    <main
      id={bgColor ? 'empresas' : 'inicio'}
      className="flex flex-col 
    justify-between items-center
    "
      style={{
        backgroundImage: `${bgColor ? `url(${bgImg})` : 'none'}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
      <Card color={bgColor ? 'white' : 'black'} />
    </main>
  )
}
