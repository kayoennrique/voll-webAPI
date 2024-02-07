import styled from "styled-components";
import logo from "./Logo.png";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from 'react';
import Button from "../../components/Button";
import FieldDigitation from "../../components/FieldDigitation";
import IClinic from "../../types/IClinic";

const Image = styled.img`
  padding: 2em 0;
`;

interface CustomProps {
  color: string
}

const StepCustomized = styled.div<CustomProps>`
    background-color: ${({ color }) => color};
    width: 16px;
    height: 16px;
    border-radius: 50%;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--gray);
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

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
`;


export default function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senhaVerificada, setSenhaVerificada] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // previne o envio padrão do formulário
    setActiveStep(activeStep + 1); // atualiza o estado da etapa para a próxima etapa
  }

  const clinic: IClinic = {
    email: email,
    nome: nome,
    senha: senha,
    endereco: {
      cep: cep,
      rua: rua,
      numero: numero,
      complemento: complemento,
      estado: estado
    }
  }

  return (
    <>
      <Image src={logo} alt="Logo da Voll" />
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepCustomized color={props.active ? 'lightblue' : 'lightgray'} />
            )}
          />
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepCustomized color={props.active ? 'lightblue' : 'lightgray'} />
            )}
          />
        </Step>
      </Stepper>

      {activeStep === 0 ? (
        <>
          <Title>Primeiro, alguns dados básicos:</Title>
          <Form onSubmit={handleSubmit}>
            <FieldDigitation
              kind="text"
              label="Nome"
              amount={nome}
              placeholder="Insira seu nome"
              onChange={setNome}
            />
            <FieldDigitation
              kind="text"
              label="CNPJ"
              amount={cnpj}
              placeholder="Insira seu cnpj"
              onChange={setCnpj}
            />
            <FieldDigitation
              kind="email"
              label="Email"
              amount={email}
              placeholder="Insira o endereço de e-mail para login"
              onChange={setEmail}
            />
            <FieldDigitation
              kind="password"
              label="Senha"
              amount={senha}
              placeholder="Digite sua senha"
              onChange={setSenha}
            />
            <FieldDigitation
              kind="password"
              label="Confirme a senha"
              amount={senhaVerificada}
              placeholder="Confirme sua senha"
              onChange={setSenhaVerificada}
            />
            <ButtonCustomized type="submit">Avançar</ButtonCustomized>
          </Form>
        </>) : (
        <>
          <Title>Agora, os dados técnicos:</Title>
          <Form onSubmit={handleSubmit}>
            <FieldDigitation
              kind="tel"
              label="Telefone"
              amount={telefone}
              placeholder="(DDD) XXXXX-XXXX"
              onChange={setTelefone}
            />
            <FieldDigitation
              kind="number"
              label="CEP"
              amount={cep}
              placeholder="Insira o CEP"
              onChange={setCep}
            />
            <FieldDigitation
              kind="text"
              label="Rua"
              amount={rua}
              placeholder="Rua"
              onChange={setRua}
            />
            <Container>
              <FieldDigitation
                kind="number"
                amount={numero}
                placeholder="Número"
                onChange={setNumero}
              />
              <FieldDigitation
                kind="text"
                amount={complemento}
                placeholder="Complemento"
                onChange={setComplemento}
              />
              <FieldDigitation
                kind="text"
                amount={estado}
                placeholder="Estado"
                onChange={setEstado}
              />
            </Container>
            <ButtonCustomized type="submit">Cadastrar</ButtonCustomized>
          </Form>
        </>
      )
      }
    </>
  );
}