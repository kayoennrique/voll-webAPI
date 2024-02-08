import { useState } from 'react';

export default function usePost() {
  const [erro, setErro] = useState('');
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState('');

  async function registerData<T>({ url, dados }:
    { url: string, dados: T }) {
    try {
      const response = await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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