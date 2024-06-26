import { PlusCircle, LogIn } from "lucide-react";
import insta from '@/app/assets/instagram-svgrepo-com.svg';
import whatsapp from '@/app/assets/whatsapp-svgrepo-com.svg'
import Image from "next/image";
import Link from "next/link";
import {Bebas_Neue} from "next/font/google"
import Button from "./Button";

const bebasneue = Bebas_Neue({subsets: ['latin'], weight: ['400']})

const Header = ()  => {
  return (
    <nav className="bg-secondary w-screen py-3 fixed md:static">
      <div className="flex items-center justify-between w-10/12 m-auto">
      <div className="flex gap-10">
        <Link href={'/'}><Image src={insta} width={35} height={35} alt="Redirect Instagram" /></Link>
       <Link href={'/'}><Image src={whatsapp} width={35} height={35} alt="Redirect Whatsapp" /></Link>
      </div>
      <Link href={'/'} className="font-primary text-primary text-2xl">Spider Burguer</Link>
      <div className={`text-primary flex gap-5 ${bebasneue.className}` }>
       
        <Button item="flex" tipo={'outlined'} to='logar'>
          <LogIn />
          LOGAR
        </Button>
  
 
          <Button item="flex" tipo='filled' to="register">
            <PlusCircle />
            CRIAR CONTA
          </Button>
      </div>
      </div>
  </nav>
  )

}

export default Header;