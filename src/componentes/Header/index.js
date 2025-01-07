import './estilo.css'
import OpcoesHeader from '../InconesHeader'
import Logo from '../Logo'
import InconesHeader from '../OpcoesHeader'

// import OpcoesHeader from './componentes/OpcoesHeader';
// import Logo from './componentes/Logo';
// import InconesHeader from './componentes/InconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`


function Header () {
    return(
        <HeaderContainer>
            <Logo/>
            <InconesHeader/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header 