import styled from 'styled-components'
import { useState } from 'react'
import { getLivros } from '../../servicos/livros'
import { useEffect } from 'react'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
    
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`



const ResultadoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Define 4 colunas iguais */
  gap: 10px; /* Espaçamento entre as colunas */
  text-align: center; /* Alinha o texto no centro de cada célula */
  margin-bottom: 20px;
`;
const Resultado = styled.div`
  display: contents; /* Permite que os itens sigam o layout do grid */
  p {
    margin: 0;
  }
  &:hover {
    border: 1px solid white;
  }
`;




const PContainer = styled.div`
  display: flex; /* Alinha os itens na mesma linha */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  gap: 20px; /* Adiciona espaçamento entre os itens */
  margin: 20px 0; /* Espaçamento vertical entre o bloco e outros elementos */
`;

const P = styled.h2`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  margin: 0; /* Remove margens padrão */
  word-spacing: 10px; /* Espaçamento entre palavras */
`;



function Categorias() {
    const [livros, setLivros] = useState({});
    const categorias = [
        "Distopia", "Clássico", "Literatura Brasileira", "Filosofia", "Infantil", 
        "Romance", "Fantasia", "Ficção Histórica", "Literatura Americana", 
        "Drama", "Romance Filosófico", "Ficção Científica", "Thriller", "Terror", 
        "Crime", "Ficção Jovem", "Mistério", "Ciência", "Quadrinhos", "Memórias"
    ];

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livros_api = await getLivros(); // Função que busca os livros
        // Agrupar livros por categoria
        const livrosPorCategoria = livros_api.reduce((acc, livro) => {
            const categoria = livro.categoria || 'Outras'; // Categoria do livro
            if (!acc[categoria]) acc[categoria] = [];
            acc[categoria].push(livro);
            return acc;
        }, {});
        setLivros(livrosPorCategoria);
    }

    return (
        <PesquisaContainer>
            <Titulo>Livro</Titulo>
            <Subtitulo>Veja os livros disponíveis.</Subtitulo>
            <div>
                {categorias.map(categoria => (
                    <div key={categoria}>
                        <h3>{categoria}</h3>
                        <ResultadoContainer>
                            <p>ID</p>
                            <p>Nome</p>
                            <p>Autor</p>
                            <p>Editora</p>
                        </ResultadoContainer>
                        {livros[categoria]?.map(livro => (
                            <ResultadoContainer key={livro.id}>
                                <Resultado>
                                    {/* <img src={livro.src} /> */}
                                    <p>{livro.id}</p>
                                    <p>{livro.titulo}</p>
                                    <p>{livro.autor}</p>
                                    <p>{livro.editora}</p>
                                </Resultado>
                            </ResultadoContainer>
                        ))}
                    </div>
                ))}
            </div>
        </PesquisaContainer>
    );
}

export default Categorias;
