const axios = require('axios');

test('Deve retornar dados para múltiplos endpoints', async () => {
    const responses = await Promise.all([
      axios.get('https://swapi.dev/api/planets/'),
      axios.get('https://swapi.dev/api/starships/'),
      axios.get('https://swapi.dev/api/films/')
    ]);
  
    responses.forEach(response => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('results');
    });
  });
  