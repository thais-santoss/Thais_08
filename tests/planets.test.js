const axios = require('axios');

test('Deve retornar dados dos planetas', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('results');
});

