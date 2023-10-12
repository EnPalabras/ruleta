import CardInitial from '../components/Cards/CardInitial'

export default function InitialPage({
  setPhase,
  children,
}: {
  setPhase: any
  children: any
}) {
  return (
    <main
      id="inicio"
      className="flex flex-col 
    justify-between items-center pb-8
    "
    >
      {children}
      <CardInitial setPhase={setPhase} />
    </main>
  )
}
