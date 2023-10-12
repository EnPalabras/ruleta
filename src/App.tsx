import './App.css'
import { useState } from 'react'
import InitialPage from './pages/InitialPage'
import Empresas from './pages/Empresas'
import Personas from './pages/Personas'
import Header, { InitHeader } from './components/Header'

enum Phases {
  INICIO = 'Inicio',
  EMPRESAS = 'Empresas',
  PERSONAL = 'Personal',
}

function App() {
  const [phase, setPhase] = useState<Phases>(Phases.INICIO)

  return (
    <>
      {/* {phase} */}
      {phase === Phases.INICIO && (
        <InitialPage setPhase={setPhase}>
          <InitHeader />
        </InitialPage>
      )}
      {phase === Phases.EMPRESAS && (
        <Empresas>
          <Header setPhase={() => setPhase(Phases.INICIO)} />
        </Empresas>
      )}
      {phase === Phases.PERSONAL && (
        <Personas>
          <Header setPhase={() => setPhase(Phases.INICIO)} />
        </Personas>
      )}
    </>
  )
}

export default App
