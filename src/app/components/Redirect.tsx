import Link from "next/link";
import { Bebas_Neue } from "next/font/google"


const bebas = Bebas_Neue({subsets: ['latin'], weight: ['400']})
interface RedirectProps {
  children: React.ReactNode;
  tipo: 'outlined' | 'filled';
  to: string;
  item: 'flex' | 'inline-block';
}
 const Redirect = ({ children, tipo, to, item} : RedirectProps) => {

  if(tipo === 'outlined') {
    return <Link className={`${bebas.className} border border-primary rounded-xl px-3 py-1 text-xl mr-2 ${item} items-center gap-2 transition duration-100 ease-in hover:bg-primary hover:text-secondary`} href={to}>{children}</Link>
  }

  if(tipo === 'filled') {
    return <Link className={`${bebas.className} border border-primary bg-primary text-secondary rounded-xl px-3 py-1 text-xl mr-2 ${item} items-center gap-2 transition duration-100 ease-in hover:bg-transparent hover:text-primary`} href={to}>{children}</Link>
  }
  
}

export default Redirect;