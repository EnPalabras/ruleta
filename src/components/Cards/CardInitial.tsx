import './Card.css'
import React from 'react'
import { Dialog, Checkbox, Input } from '@material-tailwind/react'
// import { createNewContact } from '../../services/SubmitCard'

export default function CardInitial({ setPhase }: { setPhase: any }) {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState<string>('')
  const [error, setError] = React.useState<boolean>(false)

  const handleOpen = () => setOpen(!open)

  const [checked, setChecked] = React.useState({
    checked: false,
    type: '',
  })

  const saveToLocal = (): void => {
    localStorage.setItem('email', email)
  }

  //   const uploadContact = async (): Promise<void> => {
  //     if (!email || email.length < 6 || !email.includes('@')) return
  //     const response = await createNewContact(email)
  //     console.log(response)
  //   }

  const continueAsCompany = async (): Promise<void> => {
    saveToLocal()
    //   await uploadContact()
    setPhase('Empresas')
  }

  const continueAsUser = async (): Promise<void> => {
    //   await uploadContact()
    setPhase('Personal')
  }

  const handleContinue = async (): Promise<void> => {
    try {
      if (!checked.checked) {
        setError(true)
        return
      }
      if (checked.type === 'empresa') {
        await continueAsCompany()
      } else if (checked.type === 'personal') {
        await continueAsUser()
      }
    } catch (error) {
      console.log(error)
    } finally {
      if (!checked.checked) {
        // setOpen(false)
      }
    }
  }

  return (
    <>
      <div className="card-stack h-full md:h-auto">
        <div className="card stacked"></div>
        <div className="card stacked"></div>
        <div className="card stacked"></div>
        <div className="card stacked"></div>
        <div
          className="card stacked
            flex flex-col justify-center text-gray-900 items-center text-wrap
            text-2xl sm:text-3xl px-4
            text-[#AFB0DE]
            "
          style={{
            fontFamily: 'Gotham Book',
            color: '#AFB0DE',
          }}
        >
          <span
            style={{
              letterSpacing: '0.1em',
            }}
          >
            PREGUNTAS{' '}
          </span>
          <span>PARA CONECTAR</span>
          <div
            className="bg-black text-white text-left pl-2 pr-8 md:pr-16 py-0.5 leading-3
            rotate-[-6deg]
            transform
            translate-y-[0px] translate-x-[50px]
          "
          >
            <span
              className="text-xs"
              style={{
                letterSpacing: '0.1em',
              }}
            >
              EDICIÓN
            </span>
            <br />
            <span
              className="text-sm"
              style={{
                letterSpacing: '0.15em',
              }}
            >
              EMPRESAS
            </span>
          </div>
        </div>
      </div>
      <div className="h-full md:h-auto flex items-end">
        <button className="question-button text-3xl" onClick={handleOpen}>
          Empezar
        </button>
        <Dialog
          open={open}
          handler={handleOpen}
          className="bg-[#AFB0DE]"
          style={{
            borderRadius: '22px',
          }}
        >
          <div className="my-8 w-full flex flex-col gap-8 items-center">
            <div className="flex flex-row justify-around items-center w-full">
              <p className="text-gray-900 text-2xl dark:text-gray-400 text-center">
                Personaliza tu experiencia
              </p>
            </div>
            <div
              className={`flex flex-col md:flex-row gap-4 md:gap-8 w-4/5
              justify-around md:items-center px-4 select-none sm:w-2/3
            `}
            >
              <div className="flex flex-row items-center">
                <Checkbox
                  id="empresa"
                  crossOrigin={true}
                  className={`focus:ring-0 border border-gray-900 color-gray-900 bg-transparent
                    ${error && 'border-solid border-2 border-red-500'}
                  `}
                  checked={checked.type === 'empresa' ? checked.checked : false}
                  onChange={() => {
                    setChecked({
                      checked: true,
                      type: 'empresa',
                    })
                    setError(false)
                  }}
                />{' '}
                <label
                  htmlFor="empresa"
                  style={{
                    userSelect: 'none',
                  }}
                  className="text-md text-gray-900 font-light text-lg sm:font-base"
                >
                  EMPRESA
                </label>
              </div>
              <div className="flex flex-row items-center">
                <Checkbox
                  id="personal"
                  crossOrigin={true}
                  className={`focus:ring-0 border border-gray-900 bg-transparent
                    ${error && 'border-solid border-2 border-red-500'}
                  `}
                  checked={
                    checked.type === 'personal' ? checked.checked : false
                  }
                  onChange={() => {
                    setChecked({
                      checked: true,
                      type: 'personal',
                    })
                    setError(false)
                  }}
                />{' '}
                <label
                  htmlFor="personal"
                  style={{
                    userSelect: 'none',
                  }}
                  className="text-md text-gray-900 font-light text-lg sm:font-base"
                >
                  PERSONAL
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-6 justify-end items-end px-4 w-md">
              <div className="w-full text-gray-900 rounded-none">
                <Input
                  label="E-Mail"
                  crossOrigin={true}
                  //   placeholder="E-Mail"
                  color="black"
                  value={email}
                  variant="standard"
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError(false)
                  }}
                  className="rounded-none
                    !border-b !border-gray-900
                    cursor-auto
                    placeholder-gray-900
                    
                  "
                  style={{
                    caretColor: 'black',
                    color: 'black',
                  }}
                />
              </div>
              <button
                className="bg-gray-100 hover:bg-gray-200 rounded-md py-2 px-6 
                text-gray-900 text-md
                "
                onClick={handleContinue}
              >
                Enviar
              </button>
            </div>{' '}
          </div>
        </Dialog>
      </div>
    </>
  )
}
