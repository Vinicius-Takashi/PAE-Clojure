const API_BASE_URL = '/api';

export async function calculateFrets(scaleLength) {
  const response = await fetch(`${API_BASE_URL}/calculador`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ escala: scaleLength }),
  });

  if (!response.ok) {
    throw new Error('Nao foi possivel calcular os trastes.');
  }

  return response.json();
}
