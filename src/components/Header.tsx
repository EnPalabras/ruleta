import { Switch } from '@material-tailwind/react'

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
}: {
  setPhase: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <nav className="flex flex-col  justify-between w-full mt-8 items-start">
      <div className="flex flex-row justify-between w-full items-start">
        <div className="w-full text-center my-auto w-1/5 md:w-full">
          <ArrowLeft setPhase={setPhase} />
        </div>{' '}
        <div className="text-center my-auto items-start w-full max-w-[400px]">
          <img
            src="./src/assets/images/logo.png"
            alt="logo"
            className="
        object-scale-down
        px-5
      "
          />
        </div>
        <div
          className="w-full text-center my-auto w-1/5 md:w-full
        
      "
        >
          <Switch defaultChecked crossOrigin />
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
    <nav className="flex flex-col  justify-between w-full mt-8 items-start">
      <div className="flex flex-row justify-between w-full items-start">
        <div className="w-full text-center my-auto w-1/5 md:w-full">
          <ArrowLeft setPhase={() => {}} />
        </div>{' '}
        <div
          className="text-center my-auto items-start w-full max-w-[400px] 
            
        "
        >
          <img
            src="./src/assets/images/logo.png"
            alt="logo"
            className="
        object-scale-down
        px-5
      "
          />
        </div>
        <div
          className="w-full text-center my-auto w-1/5 md:w-full
        
      "
        >
          <Switch defaultChecked crossOrigin />
        </div>
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
