import './style.css'
import { Link } from 'react-router-dom'
import HomemJoia from '../../assets/homem joia.svg'
import LogoSalesforce from '../../assets/logoSalesforce.svg'

const ConjuntoLogin = () => {

    return(
        <div className='LoginGeral'>
                <div className='LoginConteudo1'>
                    <img width={239} height={482} src={HomemJoia} alt="" />
                </div>
        
                <div className='LoginConteudo2'>
                    
                    <h1>LOGIN</h1>
                    <form action="/login">
                        <input type="email" id='email' placeholder='Insira seu email' />
                        <input type="password" id='senha' placeholder='Insira sua senha' />
                    
                        <div className='DivCheckbox'>
                            <input type="checkbox" name='Checkbox' id="Checkbox"/>
                            <label htmlFor="Checkbox">Mostrar senha</label>
                        </div>
                        <p>Não tem login? <Link to='/cadastro'>Cadastre-se!</Link></p>
                        <p><Link to="/login">Esqueci minha senha.</Link></p>
                        <button type='submit'>Acessar!</button>
                    </form>
                    <Link id='LogoSalesforce' to="/"><img width={170} height={119} src={LogoSalesforce} alt="Logo salesforce" /></Link>
                </div>
            </div>   
    )

}

export default ConjuntoLogin