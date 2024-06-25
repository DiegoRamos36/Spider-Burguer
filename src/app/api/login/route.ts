export async function POST(email: string, password: string) {
  if(!email || !password) {
    return new Response(JSON.stringify({ message: "Preencha todos os campos obrigatórios" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {

    const response = await fetch('http://localhost:8081/login', {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST',
      body: JSON.stringify( {
        "email" : email,
        "password": password
      })
    })

    

    if(!response.ok) {
      throw new Error(`Um erro ocorreu: ${response.statusText}`);
    }

    const json = await response.json()

    const {token} = json

    if (!token) {
      throw new Error('Token não encontrado na resposta');
    }
    
    return new Response(JSON.stringify({token}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    let errorMessage = 'Erro desconhecido'

    if(error instanceof Error) {
      errorMessage = error.message
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
  });
  }

}