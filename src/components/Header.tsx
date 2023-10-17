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

const ShopCart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-shopping-cart
        bg-[#b1b1d9]
         h-12 w-12 md:h-14 md:w-14
      rounded-md
      mx-auto
      p-1
      cursor-pointer
      "
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="black"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M17 17h-11v-14h-2"></path>
      <path d="M6 5l14 1l-1 7h-13"></path>
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
    <nav className="flex flex-col justify-between w-full mt-8 items-start">
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

      <div className="flex md:hidden flex-row justify-between w-full items-start">
        <div
          className="w-full text-center my-auto w-1/5 md:w-full
            
      "
        >
          <a href="https://www.instagram.com/enpalabrass/" target="_blank">
            <ShopCart />
          </a>
        </div>{' '}
        <div className="w-full max-w-[400px]"></div>
        <div
          className="w-full w-1/5 md:w-full
        
      "
        ></div>
      </div>
    </nav>
  )
}

export function InitHeader({}: {}) {
  return (
    <nav className="flex flex-col justify-between w-full mt-8 items-start">
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

      <div className="flex md:hidden flex-row justify-between w-full items-start">
        <div
          className="w-full text-center my-auto w-1/5 md:w-full
            
      "
        >
          <a
            href="https://www.instagram.com/enpalabrass/"
            target="_blank"
            // className="hidden"
          >
            <ShopCart />
          </a>
        </div>{' '}
        <div className=" w-full max-w-[400px]"></div>
        <div
          className="w-full w-1/5 md:w-full
        
      "
        ></div>
      </div>
    </nav>
  )
}
