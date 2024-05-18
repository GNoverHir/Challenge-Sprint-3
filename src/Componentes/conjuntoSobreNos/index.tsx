import './style.css'
import CenarioAventura from '../../assets/Cenario-Aventura.svg'

const ConjuntoSobreNos = () => {

    return(
    <>
        <div className='ConteudoSobreNos'>
            <div className='Conteudo'>
                <h1>SOBRE NOS!</h1>
                <p>A Salesforce é uma das principais empresas globais no campo de Customer Relationship Management (CRM), oferecendo uma ampla gama de soluções e serviços voltados para melhorar e gerenciar o relacionamento das empresas com seus clientes. Fundada em 1999 por Marc Benioff e Parker Harris, a Salesforce rapidamente se estabeleceu como líder no mercado de CRM, revolucionando a forma como as empresas interagem com seus clientes.</p>
            
            <img className='ImgCenarioAventura' src={CenarioAventura} alt="Cenario Aventura" />
            </div>
            <div className='Conteudo CorFundo'>
                <h1>NOSSOS VALORES</h1>
                <p>Os valores da Salesforce – confiança, sucesso do cliente, inovação e igualdade – não são apenas princípios orientadores, mas também a base de todas as suas ações e decisões. Esses valores ajudam a empresa a manter uma cultura corporativa forte e a construir relacionamentos duradouros e positivos com seus clientes, parceiros, funcionários e comunidades.</p>
            </div>
        </div>
    </>
    )
}

export default ConjuntoSobreNos