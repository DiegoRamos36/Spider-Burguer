export async function DELETE(id: number) {
  if (!id || isNaN(id)) {
      return new Response(JSON.stringify('Insira um ID válido do item que deseja remover'), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
      });
  }

  try {
      const response = await fetch(`http://localhost:8081/cardapio/${id}`, {
          method: 'DELETE'
      });

      if (!response.ok) {
          throw new Error('Falha ao deletar o item');
      }

      return new Response(JSON.stringify('Item deletado: ' + id), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
      });
  } catch (error) {
    let errorMessage = 'Erro desconhecido'

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
  });
  }
}
