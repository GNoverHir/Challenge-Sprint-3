import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../Componentes/header'

const SobreNos = () => {

    return(
        <div>
            <Header/>
            <h1>SOBRE NOS</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default SobreNos