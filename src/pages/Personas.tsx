import Card from '../components/Cards/Card'

export default function Personas({ children }: { children: any }) {
  return (
    <main
      id="personas"
      className="flex flex-col 
    justify-between items-center pb-8
    "
    >
      {children}
      <Card />
    </main>
  )
}
