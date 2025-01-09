import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
// import { livros } from './dadosPesquisa'
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



function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])


    async function fetchLivros (){
        const livros_api = await getLivros()
        setLivros(livros_api)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livros => livros.titulo.includes(textoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
                    
                    <ResultadoContainer>
                    <P>ID</P>
                    <P>Nome</P>
                    <P>Autor</P>
                    <P>Editora</P>
                    </ResultadoContainer>
                    
                   
            { livrosPesquisados.map( livros => (
               <ResultadoContainer>  
                <Resultado>
                    {/* <img src={livros.src}/> */}
                    <p>{livros.id}</p>
                    <p>{livros.titulo}</p>
                    <p>{livros.autor}</p>
                    <p>{livros.editora}</p>
                </Resultado>
                </ResultadoContainer>  
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa