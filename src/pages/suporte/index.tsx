import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../Componentes/header'

const Suporte = () => {

    return(
        <div>
            <Header/>
            <h1>SUPORTE</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Suporte