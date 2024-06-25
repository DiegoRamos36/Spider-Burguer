import { Item } from "../post-item/route";

export async function GET(){
  try {
    const response = await fetch('http://localhost:8081/cardapio', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`)
    }

    const json: Item[] = await response.json()

    return new Response(JSON.stringify(json), {
      status: 200,
      headers : {
        'Content-Type' : 'application/json'
      }
    })

  } catch (error) {
    let errorMessage = 'Erro desconhecido';

    if (error instanceof Error) {
        errorMessage = error.message;
    }

    return new Response(JSON.stringify({ error: errorMessage }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
    });
  }
    
}