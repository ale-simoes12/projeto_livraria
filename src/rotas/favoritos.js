import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

   
`
function favoritos() {
    return (
    <AppContainer>
        <Pesquisa/>
    </AppContainer>
    
    
   

  );
}

export default favoritos