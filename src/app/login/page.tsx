'use client';

import React from "react";
import Image from "next/image";
import loginPage from '@/app/assets/login.png'
import { Bebas_Neue } from "next/font/google";
import { CircleUserRound, LogIn } from "lucide-react";
import Button from "../components/Button";


const bebas = Bebas_Neue({subsets: ['latin'], weight: ['400']})

export default function Login() {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

  function handleClick (email: string, password: string) { 
     
  }

  return (
    <section className={`text-white  ${bebas.className} p-10 flex justify-center items-center`}>
     <div className="flex w-10/12 justify-center">
     <div className="bg-primary w-4/12 lg:w-5/12 flex flex-col items-center justify-between">
     <h1 className=" text-3xl lg:text-4xl text-center text-secondary mt-10 ">Entre em Spider Burguer</h1>
     <Image height={400} src={loginPage} alt="Para todos os momentos"/>
     </div>
      <div className="flex flex-col lg:w-6/12 w-4/12  bg-secondary justify-center relative">

        <form className="flex flex-col w-10/12 lg:w-6/12 mx-auto">
           <p className="text-center flex justify-center mb-6"><CircleUserRound height={90} width={90} /></p>
          <label className="text-2xl mb-2" htmlFor="email">Email</label>
          <input onChange={({target})=> setEmail(target.value)} type="email" name="email" value={email} className=" text-lg text-secondary font-sans mb-4 rounded-md pl-1 " />
          <label className="text-2xl mb-2" htmlFor="password">Senha</label>
          <input onChange={({target})=> setPassword(target.value)} type="password" value={password} name="password" className=" text-lg text-secondary font-sans mb-8 rounded-md" /> 
          <div>
          <Button onClick={()=> handleClick} tipo='filled' hasIcon={true}>
           Entrar  <LogIn /> 
          </Button>
            </div> 
      
        </form>
      </div>
     </div>
    </section>
  )
}