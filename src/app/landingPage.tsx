import { Bangers } from "next/font/google";
import Button from "./components/Button";
import Image from "next/image";
import Bg from '@/app/assets/Rectangle 37.png'

const bangers = Bangers({subsets: ['latin'], weight: ['400']})

const LandingPage = () => {

  return (
    <section className="bg-[url('./assets/bg-landingpage.webp')] bg-cover bg-center">
    <div className="grid grid-cols-2 w-full mx-5 h-lp xl:w-10/12 xl:mx-auto">

      <div className="m-auto">

      <h1 className=" lg: text-5xl  xl:text-7xl text-white">Onde o <span className={`${bangers.className}`} >SABOR</span> e a <span className={`${bangers.className}`}>QUALIDADE</span> encontram <span className={`${bangers.className}`}>SUPERPODERES</span></h1>
      <div className="flex text-white font-terciary mt-10 w-96 justify-between">
      <Button item="inline-block" tipo="outlined" to="/cardapio">VEJA NOSSO CARDÁPIO</Button>
      <Button item="inline-block" tipo="filled" to="/cardapio">FAÇA UM PEDIDO</Button>
      </div>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-hq p-4 m-auto h-3/4 overflow-scroll rounded-sm" >
      {/* A ser trocado por valores da api */}
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white `}>VENOM</p>
      </div>
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white w-full text-center `}>DR-OCTOPUS</p>
      </div>
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white `}>HOMEM-AREIA</p>
      </div>
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white `}>ELECTRON</p>
      </div>
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white `}>VENOM</p>
      </div>
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white `}>KRAVEN</p>
      </div>
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto text-white `}>VENOM</p>
      </div>
      <div className="relative">
      <Image src={Bg} alt="Bg Teste" width={180} height={180} className="relative brightness-50" />
      <p className={`${bangers.className} text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto text-white `}>VENOM</p>
      </div>
      </div>
    </div>
    
  </section>
  )
}

export default LandingPage