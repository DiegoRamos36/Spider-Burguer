'use client'

import { Search, SearchIcon } from "lucide-react";
import { Bangers } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
import Burger from "@/app/assets/otohambuguer.jpg"
import Button from "./components/Button";

const bangers = Bangers({subsets: ['latin'], weight: ['400']})
const bebas = Bebas_Neue({subsets: ['latin'], weight: ['400']})

const BuscarSection = () => {
  const [busca, setBusca] = React.useState('')

  function buscarItem() {

  }

  return (
    <section className=" bg-secondary py-10  mt-10">
      
      <h2 className={`${bangers.className} text-center text-white mx-auto text-6xl`}>NÃO ENCONTROU O QUE PROCURAVA?</h2>
      <div className="flex mx-auto w-5/12 mt-5">
           <input type="text" className="text-xl flex-grow pl-1 rounded-s-md" onChange={(e)=> setBusca(e.target.innerText)}/>
           <button onClick={buscarItem} className={`bg-primary text-secondary text-2xl px-4 ${bebas.className}`}>Buscar</button>
      </div>
      <h4 className={`${bebas.className} font-sans font-bold text-white w-10/12 text-4xl mx-auto my-10`}>Filtrando resultados por: </h4>
      <nav className={`my-10 w-10/12 mx-auto flex`}></nav>
      <h3 className={`${bebas.className} w-10/12 mx-auto mt-10 text-white text-4xl`}>VER PRODUTOS RELACIONADOS</h3>
      <nav className={`my-10 w-10/12 mx-auto flex`}></nav>
    </section>
  )
}

export default BuscarSection;
