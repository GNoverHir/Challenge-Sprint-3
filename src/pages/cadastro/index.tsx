import { Link } from 'react-router-dom'
import './style.css'


const Cadastro = () => {

    return(
        <div>
            <h1>Cadastro</h1>
            <Link to= '/about'>About</Link> <br/>
            <Link to= '/contact'>contact</Link>
        </div>

    )
}

export default Cadastro