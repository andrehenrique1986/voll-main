import logo from './assets/logo.png';
import perfil from './assets/perfil.png';
import styled from 'styled-components';

const CabecalhoEstilizado = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em
`

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-arround;
   flex-grow: .1;
`

const Imagem = styled.img`
    padding: 10px
`

const LinkEstilizado = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
    
`

function Cabecalho(){
    return(
        <CabecalhoEstilizado>
            <Imagem src={logo} alt="logo da empresa Voll"/>
                <Container>
                    <Imagem src={perfil} alt="imagem de perfil do usuário"/>
                    <LinkEstilizado href="#">Sair</LinkEstilizado>
                </Container>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;