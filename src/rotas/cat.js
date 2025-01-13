import styled from 'styled-components'
import Categorias from '../componentes/Categorias';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

   
`
function Cat() {
    return (
    <AppContainer>
      <Categorias/>
    </AppContainer>
  
  );
}

export default Cat