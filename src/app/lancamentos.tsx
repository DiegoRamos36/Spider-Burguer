'use client';

import { Bebas_Neue } from "next/font/google"
import { Bangers } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import Button from "./components/Button"
import Burger from "@/app/assets/otohambuguer.jpg"
import React from "react"

const bebas = Bebas_Neue({subsets: ['latin'], weight: ['400']})
const bangers = Bangers({subsets: ['latin'], weight: ['400']})
type ItemNav = {
  title: string;
  src: StaticImageData;
  alt: string;
  teste: string;
}

const Lancamentos = () => {
  const [active,setActive] = React.useState(0);

  const itemNav: ItemNav[] = [
    {
      title: 'Venom',
      src: Burger,
      alt: 'Teste',
      teste: 'lorem ipsum dolor sit amet consectetur. '
    },

    {
      title: 'Dr Octopus',
      src: Burger,
      alt: 'Teste',
      teste: 'lorem ipsum dolor sit amet consectetur. '
    },
    {
      title: 'Kraven',
      src: Burger,
      alt: 'Teste'
      ,teste: 'lorem ipsum dolor sit amet consectetur. '
    },
    {
      title: 'Homem-Areia',
      src: Burger,
      alt: 'Teste',teste: 'lorem ipsum dolor sit amet consectetur. '
    },
    {
      title: 'Mistério',
      src: Burger,
      alt: 'Teste',teste: 'lorem ipsum dolor sit amet consectetur. '
    },
    {
      title: 'Carnificina',
      src: Burger,
      alt: 'Teste',teste: 'lorem ipsum dolor sit amet consectetur. '
    },
    {
      title: 'Venom',
      src: Burger,
      alt: 'Teste',teste: 'lorem ipsum dolor sit amet consectetur. '
    }
  ]

  return (
    <section className={`w-10/12 mx-auto mt-10 `} >
      <h1 className={`${bebas.className} text-5xl`} >Ultimos Lançamentos</h1>
      <div className="mt-10">
        <nav className="bg-secondary p-5  whitespace-nowrap overflow-x-scroll  [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]">
          {itemNav.map((item, index)=> (
            <div onClick={()=> setActive(index)} className="relative inline-block animate-infinite-scroll mr-4" key={index}>
              <Image className="relative brightness-50" src={item.src} alt={item.alt} width={200} height={50} />
              <h2 className="text-2xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">{item.title}</h2>
            </div>
          ))}
        </nav>
        <div className=" lg:flex bg-secondary text-white">
          <Image src={itemNav[active].src} width={800} height={500} alt={itemNav[active].alt}/>
          <div className="flex flex-col my-10 mx-5">
            <h1 className={`${bangers.className} text-4xl`}>{itemNav[active].title}</h1>
            <p className="my-5 leading-6">{itemNav[active].teste}</p>
            <div>
              <Button tipo="filled" item="inline-block" to={'/'}>JÁ QUERO EXPERIMENTAR</Button>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lancamentos