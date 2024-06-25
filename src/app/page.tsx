import { Bangers } from "next/font/google";
import Button from "./components/Button";
import Image from "next/image";
import Bg from '@/app/assets/Rectangle 37.png'

const bangers = Bangers({subsets: ['latin'], weight: ['400']})

export default function Home() {
  return (
    <main className="bg-[url('./assets/bg-landingpage.webp')] bg-cover bg-center">
      <div className="grid grid-cols-2 w-10/12 m-auto h-lp">
        <div className="m-auto">
        <h1 className="text-7xl text-white">Onde o <span className={`${bangers.className}`} >SABOR</span> e a <span className={`${bangers.className}`}>QUALIDADE</span> encontram <span className={`${bangers.className}`}>SUPERPODERES</span></h1>
        <div className="flex text-white font-terciary mt-10 w-96 justify-between">
        <Button tipo="outlined" to="/cardapio">VEJA NOSSO CARDÁPIO</Button>
        <Button tipo="filled" to="/cardapio">FAÇA UM PEDIDO</Button>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-8 bg-hq p-4 m-auto h-3/4" >
          <Image src={Bg} alt="Bg Teste" width={180} height={180} className=""/>
          <Image src={Bg} alt="Bg Teste" width={180} height={180}/>
          <Image src={Bg} alt="Bg Teste" width={180} height={180} />
          <Image src={Bg} alt="Bg Teste" width={180}  height={180} />
        </div>
      </div>
      
    </main>
  );
}
