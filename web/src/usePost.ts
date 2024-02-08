import { useState } from 'react';

export default function usePost() {
  const [erro, setErro] = useState('');
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState('');

  async function registerData<T>({ url, dados, token }:
    { url: string, dados: T, token?: string }) {

    const headers: HeadersInit = {
      'Content-Type': 'application/json'
    }
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(dados)
      })
      setSuccess(true);
      const responseConverted = await response.json();
      setResponse(responseConverted.token);
    } catch (erro) {
      setErro('Não foi possível enviar os dados');
    }
  }

  return { registerData, success, erro, response }
}