
import { Bangers } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import spiderLogo from '@/app/assets/logo-spider.png'
import Image from "next/image";
import Link from "next/link";

const bangers = Bangers({subsets: ['latin'], weight: ['400']})
const bebas = Bebas_Neue({subsets: ['latin'], weight: ['400']})

const Footer = () => {
  return (
    <footer className={`${bebas.className} bg-primary py-4`}>
      <div className="w-10/12 mx-auto grid grid-cols-2 lg:flex lg:gap-10">
      <div>
        <h2 className="text-stone-950 text-2xl">
        Spider Burguer
        </h2>
        <p className="font-sans text-stone-600 leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi harum ab rem neque quaerat qui repellendus ullam a provident.
        </p>
      </div>
      <div>
        <h2 className="text-stone-950 text-2xl">Aqui é o seu lar</h2>
        <p className="font-sans text-stone-600 leading-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia id in aspernatur deleniti voluptatem voluptas magnam nemo ab cum?</p>
      </div>
      <div >
        <h2 className="text-stone-950 text-2xl">Registre-se</h2>
        <p className="font-sans text-stone-600 leading-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tenetur id ipsum autem. At earum consequuntur optio eveniet ullam illum!</p>
      </div>
      
      </div>
      <p className="w-10/12 mx-auto mt-10 h-0.5 bg-stone-900"></p>
      <div className="w-10/12 mx-auto flex items-center justify-between">
      <Image src={spiderLogo} alt="Logo Spider" width={100} />
      <div>
      <Link className=" text-2xl text-stone-950 inline-block mx-10 underline transition ease-in duration-100 hover:text-slate-600  " href={'/logar'}>Logar</Link>
      <Link className=" text-2xl text-stone-950 inline-block mx-10 underline transition ease-in duration-100 hover:text-slate-600  "  href={'/registrar'}>Registrar</Link>
      <Link className=" text-2xl text-stone-950 inline-block mx-10 underline transition ease-in duration-100 hover:text-slate-600  " href={'/carrinho'}>Carrinho</Link>
      </div>
     
      </div>
    </footer>
  )
}

export default Footer