import { useState } from "react";
import Assessment from "../../components/Assessment";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Graphic from "../../components/Graphic";
import Subtitle from "../../components/Subtitle";
import Tablle from "../../components/Table";
import Title from "../../components/Title";
import useDataProfessional from "../../useDataProfessional";
import useQueryData from "../../useQueryData";
import RegisterModal from "./Modal";

export default function Dashboard() {
  const { dados: consultas, erro: queriesErro } = useQueryData();
  const { dados: profissionais, erro: errroProfessional } = useDataProfessional();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  if (queriesErro || errroProfessional) {
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <Container>
      <Title>Área Administrativa</Title>
      <Button onClick={() => handleOpen()}>Cadastrar especialista</Button>
      <RegisterModal open={open} handleClose={handleClose} />
      <Title imagem="query">Consultas do Dia</Title>
      <Tablle consultas={consultas} />
      <Title imagem="graphic">Consultas mensais por especialista</Title>
      <Subtitle>Dezembro/24</Subtitle>
      <Graphic consultas={consultas} profissionais={profissionais} />
      <Title imagem="assessment">Avaliações de especialistas</Title>
      <Assessment profissionais={profissionais} />
    </Container>
  );
}
