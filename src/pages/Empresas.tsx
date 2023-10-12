import Card from '../components/Cards/Card'

export default function Empresas({ children }: { children: any }) {
  return (
    <main
      id="empresas"
      className="flex flex-col 
    justify-between items-center pb-8
    "
    >
      {children}
      <Card />
    </main>
  )
}
