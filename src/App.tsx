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
  const [bgColor, setBgColor] = useState<boolean>(true)

  return (
    <>
      {/* {phase} */}
      {phase === Phases.INICIO && (
        <InitialPage setPhase={setPhase}>
          <InitHeader />
        </InitialPage>
      )}
      {phase === Phases.EMPRESAS && (
        <Empresas bgColor={bgColor}>
          <Header
            setPhase={() => setPhase(Phases.INICIO)}
            setBgColor={setBgColor}
            bgColor={bgColor}
          />
        </Empresas>
      )}
      {phase === Phases.PERSONAL && (
        <Personas bgColor={bgColor}>
          <Header
            setPhase={() => setPhase(Phases.INICIO)}
            setBgColor={setBgColor}
            bgColor={bgColor}
          />
        </Personas>
      )}
    </>
  )
}

export default App
