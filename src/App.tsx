import './App.css';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsulta from './useDadosConsulta';

function App() {

  const { dados, erro } = useDadosConsulta();

  return (
    <>
    <Cabecalho/>
    <Container>
      <Titulo>Área Administrativa</Titulo>
    </Container>
    <Rodape/>
    <Tabela consultas={dados}/>
    </>
  );
}

export default App;
