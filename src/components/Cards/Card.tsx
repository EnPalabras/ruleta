import './Card.css'
import { PREGUNTAS } from '../../data/preguntas'
import { useState } from 'react'
import { Dialog } from '@material-tailwind/react'

export default function Card() {
  const [debounce, setDebounce] = useState(false)
  const [counter, setCounter] = useState(0)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const addCard = () => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('drawed')

    const random = Math.floor(Math.random() * PREGUNTAS.length)

    card.innerHTML = `<p></p><p>${PREGUNTAS[random]}</p><p>@enpalabrass</p>`

    card.style.transform = 'translateY(-1000px) translateX(25px)'

    setTimeout(function () {
      card.style.transform = 'rotateY(0deg) rotateY(0deg)'
    }, 100)

    const stack = document.querySelector('.card-stack')
    stack?.appendChild(card)

    if (stack?.children.length && stack?.children.length > 12) {
      stack.removeChild(stack.children[6])
    }
  }

  const drawCards = () => {
    setCounter(counter + 1)
    if (counter === 2) {
      handleOpen()
      return
    }
    if (debounce) return
    setDebounce(true)
    let iterations = 0
    const interval = setInterval(() => {
      addCard()
      iterations++
      if (iterations > 5) {
        clearInterval(interval)
      }
    }, 300)
    setTimeout(() => {
      setDebounce(false)
    }, 3000)
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
        <button className="question-button text-xl" onClick={drawCards}>
          Siguiente Pregunta
        </button>
      </div>
      <Dialog
        open={open}
        size="md"
        handler={handleOpen}
        className="bg-[#AFB0DE]"
        style={{
          borderRadius: '22px',
        }}
      >
        <div className="my-8 w-full flex flex-col gap-8 md:gap-4 items-center">
          <p className="text-black text-lg dark:text-gray-400 text-center">
            ¿Estas conectando con estas preguntas?
          </p>
          <p
            className="text-gray-900 text-2xl max-w-xl 
          px-6 dark:text-gray-400 text-center"
          >
            ¿Sabías que realizamos{' '}
            <b className="font-bold">cartas personalizadas</b> y opciones de
            <b className="font-bold"> venta al por mayor</b>?
          </p>
          <div className="flex flex-row justify-evenly w-full items-center px-4 w-md">
            <img
              src="./src/assets/images/desconectados.png"
              alt="Desconectados"
              className="w-36 h-36 md:w-48 md:h-48"
            />
            <img
              src="./src/assets/images/destapados.png"
              alt="Desconectados"
              className="w-36 h-36 md:w-48 md:h-48"
            />
          </div>
          <p className="font-bold text-gray-900 text-xl max-w-md px-2 dark:text-gray-400 text-center">
            Podemos ser tu próximo regalo empresarial, hecho a tu medida
          </p>
          <div className="flex flex-row gap-6 justify-end items-end px-4 w-md">
            <button
              className="bg-gray-100 hover:bg-gray-200 rounded-md py-2 px-6 
                text-gray-900 text-lg min-w-[300px]
                "
            >
              Conocer más
            </button>
          </div>{' '}
        </div>
      </Dialog>
    </>
  )
}
