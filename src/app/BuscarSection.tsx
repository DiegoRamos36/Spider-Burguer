'use client'

import { Bangers } from "next/font/google";
import React from "react";

const bangers = Bangers({subsets: ['latin'], weight: ['400']})

const BuscarSection = () => {
  const [busca, setBusca] = React.useState('')

  function buscarItem() {

  }

  return (
    <section className="h-screen bg-secondary mt-10">
      
      <h2 className={`${bangers.className} text-white mx-auto text-4xl`}>NÃO ENCONTROU O QUE PROCURAVA?</h2>
      <div>
           <input type="text"  onChange={(e)=> setBusca(e.target.innerText)}/>
           <button onClick={buscarItem}></button>
      </div>
   
    </section>
  )
}

export default BuscarSection;
