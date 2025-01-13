import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos } from '../servicos/favoritos';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

   
`






function Favoritos() {
    const [favoritos,setFavoritos] = useState([])
    

    async function fetchFavoritos() {
        const favoritos_api  = await getFavoritos()
        setFavoritos(favoritos_api)
        
    }

    useEffect(() => {
        fetchFavoritos() 
     },[])





    return (
    <AppContainer>
       
       {favoritos.length > 0 ? (
                favoritos.map((favorito, index) => (
                    <p key={index}>{favorito.titulo}</p> // Adicionando uma chave única
                    
                ))
            ) : (
                <p>Nenhum favorito encontrado.</p>
            )}

    </AppContainer>
    

  );
}

export default Favoritos