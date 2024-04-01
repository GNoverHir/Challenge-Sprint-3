// Código html import
import { Link } from 'react-router-dom'
import './style.css'
import logoSalesforce from '../../assets/logoSalesforce.svg'


const Header = () => {

    return(
        <header>
            <div className='Container'>
                <Link to='/'><img width={150} height={100} src={logoSalesforce} alt="Logo Salesforce" className='LogoSalesforce' /></Link>
                <h3><Link to='/sobreNos' >Sobre Nos</Link></h3>
                <h3><Link to='/produtos' >Produtos</Link></h3>
                <h3><Link to='/suporte' >Suporte</Link></h3>
                <h3><Link to='/integrantes'>Integrantes</Link></h3>
                <div className='EntrarContato'>
                    <h4>Entre em contato</h4>
                    <h4>0800 891 1887</h4>
                </div>
                <Link to='/login'><button>Login/Cadastro</button></Link>
            </div>
        </header>
    )
}

export default Header