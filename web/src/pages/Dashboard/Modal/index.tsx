import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Modal, Switch } from '@mui/material';
import { Box } from "@mui/material";
import Title from "../../../components/Title";
import styled from "styled-components";
import FieldDigitation from "../../../components/FieldDigitation";
import Button from "../../../components/Button";
import Subtitle from "../../../components/Subtitle";
import IProfessional from "../../../types/IProfessional";
import usePost from "../../../usePost";
import authenticStore from "../../../stores/authenticate.store";

const CustomizedBox = styled(Box)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    max-height: 90vh;
    overflow-y: auto;
    background-color: var(--white);
    border: none;
    border-radius: 16px;
    padding: 1em 5em;
`;

const Container = styled.div`
    text-align: left;
`;

const ContainerSwitch = styled.div`
    text-align: center;
`;

const TextoSwitch = styled.p`
    color: var(--gray);
`;

const ButtonCustomized = styled(Button)`
    width: 50%;
    display: block;
    margin: 0 auto;
`;

const ContainerAddress = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0 1em;
`;

export default function ModalCadastro({ open, handleClose }: { open: boolean, handleClose: () => void }) {
  const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVerificada, setSenhaVerificada] = useState("");
  const [possuiPlano, setPossuiPlano] = useState(false);
  const [imagem, setImagem] = useState('');
  const [especialidade, setEspecialidade] = useState("");
  const [crm, setCrm] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [telefone, setTelefone] = useState("");
  const label = { inputProps: { 'aria-label': 'Atende por plano?' } };
  const { registerData } = usePost();
  const { usuario } = authenticStore;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setPlanosSelecionados([...planosSelecionados, checkboxValue]);
    } else {
      setPlanosSelecionados(planosSelecionados.filter(plano => plano !== checkboxValue));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profissional: IProfessional = {
      nome: nome,
      crm: crm,
      especialidade: especialidade,
      possuiPlanoSaude: possuiPlano,
      estaAtivo: true,
      imagem: imagem,
      senha: senha,
      planoSaude: planosSelecionados,
      email: email,
      telefone: telefone,
      endereco: {
        cep: cep,
        rua: rua,
        estado: estado,
        numero: numero,
        complemento: complemento
      }
    }

    await registerData({ url: "especialista", dados: profissional, token: usuario.token })
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CustomizedBox>
          <Title>Cadastre o especialista inserindo os dados abaixo:</Title>
          <form onSubmit={handleSubmit}>
            <Container>
              <FieldDigitation kind="text" label="Nome" amount={nome} placeholder="Digite seu nome completo" onChange={setNome} />
              <FieldDigitation kind="email" label="Email" amount={email} placeholder="Digite seu email" onChange={setEmail} />
              <FieldDigitation kind="password" label="Senha" amount={senha} placeholder="Digite sua senha" onChange={setSenha} />
              <FieldDigitation kind="password" label="Repita a senha" amount={senhaVerificada} placeholder="Digite sua senha novamente" onChange={setSenhaVerificada} />
              <FieldDigitation kind="text" label="Especialidade" amount={especialidade} placeholder="Qual sua especialidade?" onChange={setEspecialidade} />
              <FieldDigitation kind="number" label="CRM" amount={crm} placeholder="Insira seu número de registro" onChange={setCrm} />
              <FieldDigitation kind="tel" label="Telefone" amount={telefone} placeholder="(DDD) XXXXX-XXXX" onChange={setTelefone} />
              <FieldDigitation kind="text" label="Insira a URL da sua imagem" amount={imagem} placeholder="https://img.com/fotos/retrato-de-um-jovem-medico" onChange={setImagem} />

              <FieldDigitation
                kind="number"
                label="Endereço"
                amount={cep}
                placeholder="Insira o CEP"
                onChange={setCep}
              />
              <ContainerAddress>
                <FieldDigitation
                  kind="text"
                  amount={rua}
                  placeholder="Rua"
                  onChange={setRua}
                />
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
              </ContainerAddress>
            </Container>

            <ContainerSwitch>
              <Subtitle>Atende por plano?</Subtitle>
              <Switch {...label} onChange={() => {
                possuiPlano ?
                  setPossuiPlano(false) :
                  setPossuiPlano(true)
              }
              } />
              <TextoSwitch>Não/Sim</TextoSwitch>
            </ContainerSwitch>
            {possuiPlano ?
              <>
                <Subtitle>Selecione os planos:</Subtitle>
                <FormGroup>
                  <FormControlLabel control={<Checkbox onChange={handleChange} value="Sulamerica" />} label="Sulamerica" />
                  <FormControlLabel control={<Checkbox onChange={handleChange} value="Unimed" />} label="Unimed" />
                  <FormControlLabel control={<Checkbox onChange={handleChange} value="Bradesco" />} label="Bradesco" />
                  <FormControlLabel control={<Checkbox onChange={handleChange} value="Amil" />} label="Amil" />
                  <FormControlLabel control={<Checkbox onChange={handleChange} value="Biosaúde" />} label="Biosaúde" />
                  <FormControlLabel control={<Checkbox onChange={handleChange} value="Biovida" />} label="Biovida" />
                  <FormControlLabel control={<Checkbox onChange={handleChange} value="Outro" />} label="Outro" />
                </FormGroup>
              </>
              : ''}
            <ButtonCustomized>Cadastrar</ButtonCustomized>
          </form>
        </CustomizedBox>
      </Modal >
    </>
  );
}