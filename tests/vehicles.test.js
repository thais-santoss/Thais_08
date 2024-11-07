const axios = require('axios');

test('Deve retornar dados dos veículos', async () => {
    const response = await axios.get('https://swapi.dev/api/vehicles/');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('results');
  });
  