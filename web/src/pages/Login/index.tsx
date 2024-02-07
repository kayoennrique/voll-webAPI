
import FieldDigitation from "../../components/FieldDigitation";
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  return (
    <>
      <FieldDigitation amount={email} kind="text" placeholder="Insira seu endereço de e-mail" onChange={setEmail} />
    </>
  )
}