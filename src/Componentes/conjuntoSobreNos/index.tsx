import './style.css'
import CenarioAventura from '../../assets/Cenario-Aventura.svg'

const ConjuntoSobreNos = () => {

    return(
    <>
        <div className='ConteudoSobreNos'>
            <div className='Conteudo'>
                <h1>SOBRE NOS!</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ducimus natus blanditiis modi quisquam laudantium error quibusdam dicta, vel sit nisi esse accusantium facilis sint. Provident minus a aut nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur, provident maxime illum eligendi deserunt ut recusandae, quae eaque ipsa magnam voluptatum fugiat architecto veritatis quo sapiente earum dolorem aut.</p>
            
            <img className='ImgCenarioAventura' src={CenarioAventura} alt="Cenario Aventura" />
            </div>
            <div className='Conteudo CorFundo'>
                <h1>NOSSOS VALORES</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aspernatur, alias similique, provident fugit cumque fugiat saepe iure, ut quis quo culpa natus obcaecati hic ullam ratione corporis illum laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sint molestias voluptatibus id! Quae fuga unde possimus quas quidem officiis! Veniam similique expedita eum ab incidunt ad harum sint ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde, minus et eos sapiente provident praesentium. Quae saepe quam a velit tempore provident minus modi ducimus ut dolores, quaerat debitis?</p>
            </div>
        </div>
    </>
    )
}

export default ConjuntoSobreNos