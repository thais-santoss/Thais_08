const axios = require('axios');

test('Deve retornar dados das pessoas', async () => {
    const response = await axios.get('https://swapi.dev/api/people/');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('results');
  });
  