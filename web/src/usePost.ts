import { useState } from 'react';

export default function usePost() {
  const [erro, setErro] = useState('');
  const [success, setSuccess] = useState(false);

  async function registerData<T>({ url, dados }:
    { url: string, dados: T }) {
    try {
      await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      setSuccess(true);
    } catch (erro) {
      setErro('Não foi possível enviar os dados');
    }
  }

  return { registerData, success, erro }
}