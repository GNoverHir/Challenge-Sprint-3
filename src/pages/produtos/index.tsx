import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../Componentes/header'
import Footer from '../../Componentes/footer'
import ConjuntoProdutos from '../../Componentes/conjuntoProdutos'


const Produtos = () => {

    return(
        <div>
            <Header/>
            <ConjuntoProdutos/>
            <Footer/>
        </div>
    )
}

export default Produtos