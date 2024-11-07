const axios = require('axios');

test('Deve retornar 404 para uma rota inexistente', async () => {
  try {
    await axios.get('https://swapi.dev/api/heroes/');
  } catch (error) {
    
    if (error.response) {
      expect(error.response.status).toBe(404);
    } else {
      
      throw new Error('Erro inesperado sem resposta da API');
    }
  }
});

  