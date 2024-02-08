import styled from "styled-components";
import React, { useState } from 'react';
import logo from './Logo.png';
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import FiledDigitation from "../../components/FieldDigitation";
import usePost from "../../usePost";
import authenticStore from "../../stores/authenticate.store";

const Image = styled.img`
  padding: 2em 0;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--gray);
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--dark-blue);
`;

const ParagraphRegistration = styled(Paragraph)`
  color: var(--gray);
`;

const CustomLink = styled(Link)`
  color: var(--light-blue);
  font-weight: 700;
  text-decoration: none;
`;

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonCustomized = styled(Button)`
  width: 50%;
`;

interface ILogin {
  email: string,
  senha: string
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { registerData, erro, success, response } = usePost();
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuario: ILogin = {
      email: email,
      senha: senha
    }
    try {
      registerData({ url: "auth/login", dados: usuario })
      authenticStore.login({ email: email, token: response })
      response && navigate('/dashboard')
    } catch (erro) {
      erro && alert('Não foi possível fazer login')
    }
  }

  return (
    <>
      <Image src={logo} alt="Logo da Voll" />
      <Title>Faça login em sua conta</Title>
      <Form onSubmit={handleLogin}>
        <FiledDigitation kind="email" label="Email" amount={email} placeholder="Insira seu endereço de email" onChange={setEmail} />
        <FiledDigitation kind="password" label="Senha" amount={senha} placeholder="Insira sua senha" onChange={setSenha} />
        <ButtonCustomized type="submit">Entrar</ButtonCustomized>
      </Form>
      <Paragraph>Esqueceu sua senha?</Paragraph>
      <ParagraphRegistration>Ainda não tem conta? <CustomLink to="/cadastro">Faça seu cadastro!</CustomLink></ParagraphRegistration>
    </>
  );
}