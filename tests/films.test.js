const axios = require('axios');

test('Deve retornar dados dos filmes', async () => {
    const response = await axios.get('https://swapi.dev/api/films/');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('results');
  });
  