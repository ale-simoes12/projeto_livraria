import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../servicos/favoritos';

// Estilo para o container principal
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Estilo para o container de resultados
const ResultadoContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

// Estilo para o título
const Titulo = styled.h1`
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
`;

// Estilo para o item de cada livro (cartão simples, sem imagem)
const Resultado = styled.div`
  background-color: white;
  margin: 10px;
  padding: 20px;
  width: 200px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Somente uma leve sombra para o estilo */

  p {
    color: #333;
    font-size: 1.2rem;
    margin-top: 10px;
    font-weight: bold;
  }
  
   &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritos_api = await getFavoritos();
    setFavoritos(favoritos_api);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {favoritos.map(favorito => (
          <Resultado >
            {/* Exibindo apenas o nome do livro */}
            <p>{favorito.titulo}</p>
          </Resultado>
        ))}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;
