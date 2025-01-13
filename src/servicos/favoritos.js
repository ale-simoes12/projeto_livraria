import axios from "axios";

const favoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getFavoritos() {
    try {
        const response = await favoritosAPI.get('/');
        console.log(response.data);  // Verifique os dados da resposta
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os livros favoritos:', error);  // Exibe o erro se ocorrer
    }
}

export { getFavoritos };
