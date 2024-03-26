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
                        <p>Lorem ipsum dolor sit amet. 33 autem rerum sit illum placeat est quos corrupti in fugiat quia. Aut dolore delectus ut pariatur libero sed sint tempora non modi dolore et voluptatibus sint et quod quas sed provident cumque. </p>
                        <h2>→</h2>
                    </section> 
                </div>
            </div>

    )
}

export default ConjuntoQueridinhos