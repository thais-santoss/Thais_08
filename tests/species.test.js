const axios = require('axios');

test('Deve retornar dados das espécies', async () => {
    const response = await axios.get('https://swapi.dev/api/species/');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('results');
  });
  