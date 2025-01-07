import './estilo.css'
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola]
function InconesHeader () {
    return(
        <ul className='icones'>
        { icones.map( (icone) => (
          <li  className='icone' ><img src={icone}></img></li>
        )) }
    </ul>
    )
}

export default InconesHeader 