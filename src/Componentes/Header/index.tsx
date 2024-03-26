import { Link } from 'react-router-dom'
import './style.css'
import logoSalesforce from '../../assets/logoSalesforce.svg'


const Header = () => {

    return(
        <header>
            <div className='Container'>
                <img width={150} height={100} src={logoSalesforce} alt="Logo Salesforce" className='LogoSalesforce' />
                <h3><Link to='/sobreNos'>Sobre Nos</Link></h3>
                <h3><Link to='/produtos'>Produtos</Link></h3>
                <h3><Link to='/suporte'>Suporte</Link></h3>
                <div className='EntrarContato'>
                    <h3>Entre em contato</h3>
                    <h3>0800 891 1887</h3>
                </div>
                <button>Login/Cdastro</button>
            </div>
        </header>
    )
}

export default Header