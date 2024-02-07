import styled from "styled-components";
import logo from "./Logo.png";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from 'react';
import Button from "../../components/Button";
import FieldDigitation from "../../components/FieldDigitation";

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
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [passwordVerified, setPasswordVerified] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // previne o envio padrão do formulário
    setActiveStep(activeStep + 1); // atualiza o estado da etapa para a próxima etapa
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
              amount={name}
              placeholder="Insira seu nome"
              onChange={setName}
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
              amount={password}
              placeholder="Digite sua senha"
              onChange={setPassword}
            />
            <FieldDigitation
              kind="password"
              label="Confirme a senha"
              amount={passwordVerified}
              placeholder="Confirme sua senha"
              onChange={setPasswordVerified}
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
              amount={telephone}
              placeholder="(DDD) XXXXX-XXXX"
              onChange={setTelephone}
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
                amount={number}
                placeholder="Número"
                onChange={setNumber}
              />
              <FieldDigitation
                kind="text"
                amount={complement}
                placeholder="Complemento"
                onChange={setComplement}
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