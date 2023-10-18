// import logoImg from '../assets/images/logo.png'
import logoNegro from '../assets/images/logoNegro.png'
import logoVioleta from '../assets/images/logoVioleta.png'

// const ArrowLeft = ({ setPhase }: { setPhase: any }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="icon icon-tabler icon-tabler-arrow-narrow-left
//       bg-[#b1b1d9]
//         h-12 w-12 md:h-14 md:w-14
//       rounded-md
//       mx-auto
//       cursor-pointer
//       "
//       onClick={setPhase}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="black"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M5 12l14 0"></path>
//       <path d="M5 12l4 4"></path>
//       <path d="M5 12l4 -4"></path>
//     </svg>
//   )
// }

const ArrowLeft2 = ({ setPhase }: { setPhase: any }) => {
  return (
    <button className=" bg-black text-white rounded-full">
      <svg
        width="40px"
        height="40px"
        onClick={setPhase}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  )
}

export default function Header({
  setPhase,
  setBgColor,
  bgColor,
}: {
  setPhase: React.Dispatch<React.SetStateAction<string>>
  setBgColor: React.Dispatch<React.SetStateAction<boolean>>
  bgColor: boolean
}) {
  return (
    <nav
      className="flex flex-col justify-between 
    w-full mt-8 mb-10 items-start min-h-[80px] md:min-h-0
    max-w-3xl px-0
    select-none
    "
    >
      <div className="flex flex-row justify-between w-full items-start">
        <div
          className="w-full my-auto 
          w-1/5 justify-start pl-4
          items-start
        md:w-full"
        >
          {/* <ArrowLeft setPhase={setPhase} /> */}
          <ArrowLeft2 setPhase={setPhase} />
        </div>{' '}
        <div className="text-center my-auto items-start w-full max-w-[250px]">
          <img
            src={bgColor ? logoNegro : logoVioleta}
            alt="logo"
            className="
        
        
      "
          />
        </div>
        <div className="w-full text-right my-auto w-1/5 md:w-full pr-4">
          <label className="relative inline-flex items-center  cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={bgColor}
              onChange={() => {
                setBgColor(!bgColor)
              }}
            />
            <div
              className="w-11 h-6 bg-gray-500 rounded-full peer
            peer-checked:after:translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
            after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </label>
        </div>
      </div>
    </nav>
  )
}

export function InitHeader({}: {}) {
  return (
    <nav
      className="flex flex-col justify-between w-full mt-8 mb-10 items-start min-h-[80px] md:min-h-0
        select-none

    "
    >
      <div className="flex flex-row justify-between w-full items-start">
        <div className="w-full text-center my-auto w-1/5 md:w-full"></div>{' '}
        <div
          className="text-center my-auto items-start w-full max-w-[250px] 
            
        "
        >
          <img
            src={logoVioleta}
            alt="logo"
            className="
        
      "
          />
        </div>
        <div className="w-full text-center my-auto w-1/5 md:w-full"></div>
      </div>
    </nav>
  )
}
