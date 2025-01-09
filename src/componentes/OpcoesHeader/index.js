import './estilo.css'
import {Link} from "react-router-dom"

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']
function OpcoesHeader () {
    return(
        <ul className='opcoes'>
      
                    { textoOpcoes.map ( (texto) => (
                     <Link  to={`/${texto.toLowerCase()}`}>  <li className='opcao'><p>{texto}</p></li> </Link>  
                    ) ) }
                
        </ul>
    )
}

export default OpcoesHeader 