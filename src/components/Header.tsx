import logoImg from '../assets/images/logo.png'

const ArrowLeft = ({ setPhase }: { setPhase: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-narrow-left 
      bg-[#b1b1d9]
        h-12 w-12 md:h-14 md:w-14
      rounded-md
      mx-auto
      cursor-pointer
      "
      onClick={setPhase}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
      <path d="M5 12l4 4"></path>
      <path d="M5 12l4 -4"></path>
    </svg>
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
    <nav className="flex flex-col justify-between w-full my-10 items-start min-h-[80px] md:min-h-0">
      <div className="flex flex-row justify-between w-full items-start">
        <div className="w-full text-center my-auto w-1/5 md:w-full">
          <ArrowLeft setPhase={setPhase} />
        </div>{' '}
        <div className="text-center my-auto items-start w-full max-w-[400px]">
          <img
            src={logoImg}
            alt="logo"
            className="
        object-scale-down
        px-5
      "
          />
        </div>
        <div className="w-full text-center my-auto w-1/5 md:w-full">
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
    <nav className="flex flex-col justify-between w-full my-10 items-start min-h-[80px] md:min-h-0">
      <div className="flex flex-row justify-between w-full items-start">
        <div className="w-full text-center my-auto w-1/5 md:w-full"></div>{' '}
        <div
          className="text-center my-auto items-start w-full max-w-[400px] 
            
        "
        >
          <img
            src={logoImg}
            alt="logo"
            className="
        object-scale-down
        px-5
      "
          />
        </div>
        <div className="w-full text-center my-auto w-1/5 md:w-full"></div>
      </div>
    </nav>
  )
}
