const axios = require('axios');

test('Deve retornar dados para uma nave específica', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/9/');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('name');
  });
  