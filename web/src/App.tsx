import './App.css';
import useDataProfessional from './useDataProfessional';
import useQueryData from './useQueryData';
import Header from './components/Header';
import Container from './components/Container';
import Title from './components/Title';
import Footer from './components/Footer';
import Tablle from './components/Table';
import Graphic from './components/Graphic';
import Assessment from './components/Assessment';
import Button from './components/Button';
import Subtitle from './components/Subtitle';

function App() {
  const { dados: consultas, erro: queriesErro } = useQueryData();
  const { dados: profissionais, erro: errroProfessional } = useDataProfessional();

  if (queriesErro || errroProfessional) {
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Área Administrativa</Title>
        <Button>Cadastrar especialista</Button>
        <Title imagem="query">Consultas do Dia</Title>
        <Tablle consultas={consultas} />
        <Title imagem="graphic">Consultas mensais por especialista</Title>
        <Subtitle>Dezembro/24</Subtitle>
        <Graphic consultas={consultas} profissionais={profissionais} />
        <Title imagem="assessment">Avaliações de especialistas</Title>
        <Assessment profissionais={profissionais} />
      </Container>
      <Footer />
    </>
  );
}

export default App;