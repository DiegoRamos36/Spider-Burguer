export type Item = {
  id: number;
  nome: string;
  desc: string;
  slug: string;
  preco: number;
  imgSrc: string;
  imgAlt: string;
  quantidade: number;
}

export async function POST({nome, desc, slug, preco, imgSrc, imgAlt, quantidade} : Item) {
  if(!nome || !slug || !preco || !imgSrc || !imgAlt) {
    return new Response(JSON.stringify({ message: "Preencha todos os campos obrigatórios" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const response = await fetch('http://localhost:8081/cardapio', {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST',
  
      body : JSON.stringify({
        "nome": nome,
        "desc" : desc,
        "slug" : slug,
        "preco" : preco,
        "imgSrc" : imgSrc,
        "imgAlt" : imgAlt,
        "quantidade" : quantidade
      })
    }) 

    if(!response.ok) {
      throw new Error(`Um erro ocorreu ${response.statusText}`)
    }

    const data = await response.json();

    return new Response(JSON.stringify({ message: 'Item criado com sucesso', item: data }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    let errorMessage = 'Erro desconhecido';

    if(error instanceof Error) {
      errorMessage = error.message
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
  });
  }
 
}