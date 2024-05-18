import './style.css'
import { Link } from 'react-router-dom'
import Trailer1 from '../../assets/trailler-1.svg'
import MulherTerra from '../../assets/mulher terra.svg'


const SalesforceAndCRM = () => {
    
    return(

        <div className='DivConjuntos'>
                

                <div className='Conjunto1'>
                    <section className='SectConjunto1'>
                        <h1>SALESFORCE?</h1>
                        <p>A Salesforce é uma das principais empresas globais no campo de Customer Relationship Management (CRM), oferecendo uma ampla gama de soluções e serviços voltados para melhorar e gerenciar o relacionamento das empresas com seus clientes. Fundada em 1999 por Marc Benioff e Parker Harris, a Salesforce rapidamente se estabeleceu como líder no mercado de CRM, revolucionando a forma como as empresas interagem com seus clientes.</p>
                        <Link to='/sobreNos'><button>SAIBA MAIS</button></Link>
                    </section>
                        <img height={222} width={538} src={Trailer1} alt="Trailer" />
                </div>



                <div className='Conjunto2'>
                    <img height={285} width={490} src={MulherTerra} alt="Mulher Terra" />
                    <section className='SectConjunto2'>
                        <h1>O QUE É CRM?</h1>
                        <p>CRM, ou Customer Relationship Management (Gestão de Relacionamento com o Cliente, em português), é uma estratégia de negócios que visa melhorar o relacionamento de uma empresa com seus clientes, potencializando as interações e o engajamento ao longo do ciclo de vida do cliente. O CRM envolve o uso de tecnologias, processos e práticas para gerenciar e analisar as interações com clientes e dados associados.</p>
                    </section>
                </div>

            </div>
    )
}

export default SalesforceAndCRM