import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" });

async function getLivros() {
    try {
        const response = await livrosAPI.get('/');
        console.log(response.data);  // Verifique os dados da resposta
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os livros:', error);  // Exibe o erro se ocorrer
    }
}

export { getLivros };
