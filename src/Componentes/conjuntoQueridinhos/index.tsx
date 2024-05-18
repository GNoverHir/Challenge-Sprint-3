import './style.css'
import { Link } from 'react-router-dom'
import SalesCloudLogo from '../../assets/Icon-sales-cloud.svg'

const ConjuntoQueridinhos = () => {

    return(

            <div className='ConteudoQueridinhos'>

                <h1 className='TituloQueridinhos'>NOSSOS QUERIDINHOS</h1>

                <div className='ConjuntoPainelProduto'>
                    <Link to="/produtos"><img width={100} height={100} src={SalesCloudLogo} alt="Sales Cloud Logo" /></Link>
                    <section className='SectQueridinhos'>
                        <h1>SALES CLOUD!</h1>
                        <p>O Sales Cloud é uma ferramenta poderosa e abrangente que capacita as equipes de vendas a gerenciar todo o ciclo de vendas de forma mais eficiente e eficaz. Com suas funcionalidades avançadas e integração perfeita com outras ferramentas de negócios, o Sales Cloud ajuda as empresas a aumentar a produtividade, melhorar o relacionamento com os clientes e impulsionar o crescimento das vendas.</p>
                        <h2>→</h2>
                    </section> 
                </div>
            </div>

    )
}

export default ConjuntoQueridinhos