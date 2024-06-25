import { Item } from "../post-item/route";

export async function PUT(id: number,{nome, desc, preco, quantidade, slug, imgSrc, imgAlt }: Partial<Item>){

  try {
    const response = await fetch(`http://localhost:8081/cardapio/${id}`, {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
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
      throw new Error(`Um erro ocorreu: ${response.statusText}`)
    }

    return new Response(JSON.stringify({ message: "Atualização bem-sucedida" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch(error) {
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