const axios = require('axios');

test('Deve retornar dados das naves', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('results');
  });
  