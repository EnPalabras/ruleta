import './Card.css'
import { PREGUNTAS } from '../../data/preguntas'
import { useState } from 'react'
import { Dialog } from '@material-tailwind/react'
import descPhoto from '../../assets/images/desconectados.png'
import destPhoto from '../../assets/images/destapados.png'
import audio from '../../assets/audio.mp3'
import Footer from '../Footer'

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
    const audioElement = new Audio(audio)
    setCounter(counter + 1)
    if (counter === 2) {
      handleOpen()
      return
    }
    if (debounce) return
    audioElement.play()
    setDebounce(true)
    let iterations = 0
    const interval = setInterval(() => {
      addCard()
      iterations++
      if (iterations > 4) {
        clearInterval(interval)
      }
    }, 330)
    setTimeout(() => {
      setDebounce(false)
    }, 2500)
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
            fontFamily: 'Gotham Ultra',
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
            className="bg-black text-white text-left pl-2 pr-8 md:pr-16 py-0.5 leading-[10px]
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
      <div
        className="h-full md:h-auto flex justify-end gap-12 
      md:gap-0 items-end flex-col w-full"
      >
        <button className="mx-auto question-button text-xl" onClick={drawCards}>
          Siguiente Pregunta
        </button>
        <Footer />
      </div>

      <Dialog
        open={open}
        size="md"
        handler={handleOpen}
        className="bg-[#AFB0DE]"
        style={{
          borderRadius: '22px',
          fontFamily: 'GothamRnd',
        }}
      >
        <div className="my-8 w-full flex flex-col gap-8 md:gap-4 items-center">
          <p
            className="text-black text-lg text-center"
            style={{
              fontFamily: 'Gotham Book',
            }}
          >
            ¿Estas conectando con estas preguntas?
          </p>
          <p
            className="text-gray-900 text-xl max-w-xl 
          px-6 text-center"
          >
            ¿Sabías que realizamos{' '}
            <b className="font-bold">cartas personalizadas</b> y opciones de
            <b className="font-bold"> venta al por mayor</b>?
          </p>
          <div className="flex flex-row justify-evenly w-full items-center px-4 w-md">
            <img
              src={descPhoto}
              alt="Desconectados"
              className="w-36 h-36 md:w-48 md:h-48"
            />
            <img
              src={destPhoto}
              alt="Destapados"
              className="w-36 h-36 md:w-48 md:h-48"
            />
          </div>
          <p className="font-bold text-gray-900 text-xl max-w-md px-2 text-center">
            Podemos ser tu próximo regalo empresarial, hecho a tu medida
          </p>
          <div className="flex flex-row gap-6 justify-end items-end px-4 w-md">
            <a href="https://www.enpalabras.com.ar">
              <button
                className="bg-gray-100 hover:bg-gray-200 rounded-md py-2 px-6 
                text-gray-900 text-lg min-w-[300px]
                "
                style={{
                  fontFamily: 'Gotham Book',
                }}
              >
                Conocer más
              </button>
            </a>
          </div>{' '}
        </div>
      </Dialog>
    </>
  )
}
