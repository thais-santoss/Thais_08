const axios = require('axios');

test('Deve retornar dados para um filme específico', async () => {
    const response = await axios.get('https://swapi.dev/api/films/1/');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('title');
  });
  