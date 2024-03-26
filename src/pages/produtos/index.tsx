import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../Componentes/header'

const Produtos = () => {

    return(
        <div>
            <Header/>
            <h1>PRODUTOS</h1>
            <Link to="/">HOME</Link>
        </div>
    )
}

export default Produtos