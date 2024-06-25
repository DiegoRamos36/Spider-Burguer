export async function POST(email: string, username: string, password: string){

    if(!email && !username && !password) {
      return new Response(JSON.stringify({ message: "Preencha todos os campos" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
    });
    }

    try {
      const response = await fetch("http://localhost/register", {
        headers: {
          'Content-Type': "application/json"
        },
        method: 'POST',
  
        body : JSON.stringify({
          "username" : username,
          "email" : email,
          "password": password
        })
      })

      if(!response.ok) {
        throw new Error(`Um erro ocorreu: ${response.statusText}`)
      }
    } catch(error) {
      let errorMessage = 'Erro desconhecido';

      if(error instanceof Error) {
       errorMessage = error.message;
       
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
  });
  }

}