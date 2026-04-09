const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function buscarEstados() {
  const res = await fetch(`${API_URL}/api/estados`);
  if (!res.ok) throw new Error('Erro ao buscar estados');
  return res.json();
}

export async function buscarAnimaisPorEstado(estadoId) {
  // Tenta diferentes endpoints possíveis
  const endpoints = [
    `${API_URL}/api/animais/estado/${estadoId}`,
    `${API_URL}/api/animais?estadoId=${estadoId}`,
    `${API_URL}/api/estados/${estadoId}/animais`
  ];
  
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) {
        return res.json();
      }
    } catch (err) {
      console.log(`Tentativa falhou: ${endpoint}`);
    }
  }
  
  throw new Error('Nenhum endpoint de busca de animais funcionou');
}

export async function criarAnimal(dadosAnimal) {
  console.log('Enviando dados para API:', dadosAnimal);
  const res = await fetch(`${API_URL}/api/animais`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosAnimal),
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    console.error('Erro da API:', res.status, errorText);
    throw new Error(`Erro ao criar animal: ${res.status} - ${errorText}`);
  }
  
  return res.json();
}
