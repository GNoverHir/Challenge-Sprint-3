import './style.css'
import Header from '../../Componentes/header'
import { Link } from 'react-router-dom'
import Trailer1 from '../../assets/trailler-1.svg'
import MulherTerra from '../../assets/mulher terra.svg'


const SalesforceAndCRM = () => {
    
    return(

        <div className='DivConjuntos'>
                

                <div className='Conjunto1'>
                    <section className='SectConjunto1'>
                        <h1>SALESFORCE?</h1>
                        <p>Lorem ipsum dolor sit amet. 33 autem rerum sit illum placeat est quos corrupti in fugiat quia. Aut dolore delectus ut pariatur libero sed sint tempora non modi dolore et voluptatibus sint et quod quas sed provident cumque.</p>
                        <Link to='/sobreNos'><button>SAIBA MAIS</button></Link>
                    </section>
                        <img height={222} width={538} src={Trailer1} alt="Trailer" />
                </div>



                <div className='Conjunto2'>
                    <img height={285} width={490} src={MulherTerra} alt="Mulher Terra" />
                    <section className='SectConjunto2'>
                        <h1>O QUE É CRM?</h1>
                        <p>Lorem ipsum dolor sit amet. 33 autem rerum sit illum placeat est quos corrupti in fugiat quia. Aut dolore delectus ut pariatur libero sed sint tempora non modi dolore et voluptatibus sint et quod quas sed provident cumque. </p>
                    </section>
                </div>

            </div>
    )
}

export default SalesforceAndCRM