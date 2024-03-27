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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae fugit soluta natus, sequi autem explicabo provident expedita totam commodi, rem officia ullam quis? Magnam numquam blanditiis quis corporis alias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam eligendi aliquid odit, voluptates quae molestias sed quas. Saepe blanditiis optio adipisci, ut doloremque animi deleniti harum fugiat cupiditate expedita. Lorem ipsum dolor sit amet. 33 autem rerum sit illum placeat est quos corrupti in fugiat quia. Aut dolore delectus ut pariatur libero sed sint tempora non modi dolore et voluptatibus sint et quod quas sed provident cumque.</p>
                        <Link to='/sobreNos'><button>SAIBA MAIS</button></Link>
                    </section>
                        <img height={222} width={538} src={Trailer1} alt="Trailer" />
                </div>



                <div className='Conjunto2'>
                    <img height={285} width={490} src={MulherTerra} alt="Mulher Terra" />
                    <section className='SectConjunto2'>
                        <h1>O QUE É CRM?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sed repellendus facere sapiente eum quidem soluta distinctio odio mollitia, itaque ea assumenda maiores. Consectetur, alias debitis. Neque ipsum quibusdam inventore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fuga distinctio similique aspernatur ut, quidem architecto possimus illum? Aut voluptatem dolorum ex nostrum? Similique quasi laborum sequi reprehenderit tenetur illum. Lorem ipsum dolor sit amet. 33 autem rerum sit illum placeat est quos corrupti in fugiat quia. Aut dolore delectus ut pariatur libero sed sint tempora non modi dolore et voluptatibus sint et quod quas sed provident cumque. </p>
                    </section>
                </div>

            </div>
    )
}

export default SalesforceAndCRM