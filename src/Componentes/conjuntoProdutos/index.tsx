import './style.css'
import Trailer2 from '../../assets/trailler-2.svg'
import LogoSalesCloud  from '../../assets/Icon-sales-cloud.svg'


const Produtos = () => {

    return(
        <div>
            <div className='ConteudoGeralProdutos'>
                <div className='ConteudosProdutos1'>
                    <input type="text" id='BarraPesquisa' placeholder='Pesquise o produto'/>
                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>

                    <section>
                        <img width={33} height={28} src={LogoSalesCloud} alt="" />
                        <p>Sales Cloud</p>
                    </section>
                </div>

                <div className='ConteudosProdutos2'>
                    <section className='SectNomeProduto'>
                        <img width={116} height={116} src={LogoSalesCloud} alt="" />
                        <h1>SALES CLOUD!</h1>
                    </section>
                    <p>O Sales Cloud é uma solução de Customer Relationship Management (CRM) desenvolvida pela Salesforce, projetada especificamente para otimizar e automatizar o processo de vendas de uma empresa. É uma plataforma robusta que ajuda as equipes de vendas a gerenciar leads, oportunidades, contas, contatos e realizar análises de desempenho de vendas.</p>
                    <img className='TrailerProduto' width={475} height={175} src={Trailer2} alt="" />
                    <p><strong>Aumento da Produtividade: </strong>Automatiza tarefas administrativas e repetitivas, permitindo que os representantes de vendas se concentrem em vender. <br /><br />
                        <strong>Melhoria na Gestão do Relacionamento com o Cliente: </strong>Centraliza as informações sobre clientes, permitindo um atendimento mais personalizado e eficiente. <br /><br />
                        <strong>Tomada de Decisões Baseada em Dados:</strong> Fornece insights valiosos através de relatórios e dashboards, ajudando na tomada de decisões estratégicas. <br /><br />
                        <strong>Mobilidade e Flexibilidade: </strong>Permite que a equipe de vendas acesse informações e funcionalidades do CRM a qualquer momento e de qualquer lugar. <br /><br />
                        <strong>Aumento das Vendas e Receita: </strong>Melhora a eficácia do processo de vendas, resultando em um aumento nas taxas de fechamento de negócios e na receita.</p>
                    <img className='TrailerProduto' width={475} height={175} src={Trailer2} alt="" />
                    <p>O Sales Cloud é uma ferramenta poderosa e abrangente que capacita as equipes de vendas a gerenciar todo o ciclo de vendas de forma mais eficiente e eficaz. Com suas funcionalidades avançadas e integração perfeita com outras ferramentas de negócios, o Sales Cloud ajuda as empresas a aumentar a produtividade, melhorar o relacionamento com os clientes e impulsionar o crescimento das vendas.</p>
                </div>
            </div>
        </div>
    )
}

export default Produtos