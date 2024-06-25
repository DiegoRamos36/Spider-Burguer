import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  tipo: 'outlined' | 'filled';
  to: string;
}
 const Button = ({ children, tipo, to }: ButtonProps) => {

  if(tipo === 'outlined') {
    return <Link className="border border-primary rounded-xl px-3 py-1 text-xl mr-2 flex items-center gap-2 transition duration-100 ease-in hover:bg-primary hover:text-secondary" href={to}>{children}</Link>
  }

  if(tipo === 'filled') {
    return <Link className="border border-primary bg-primary text-secondary rounded-xl px-3 py-1 text-xl mr-2 flex items-center gap-2 transition duration-100 ease-in hover:bg-transparent hover:text-primary" href={to}>{children}</Link>
  }
  
}

export default Button;