import './style.css'
import Footer from '../../Componentes/footer'
import Imagem30Dias from '../../assets/30 dia salesforce.png'
import HomemFeliz from '../../assets/homem feliz.svg'
import LogoSalesforce from '../../assets/logoSalesforce.svg'
import {Link} from 'react-router-dom'
 
const Cadastro = () => {

    return(
        <div>
            <div className='CadastroConteudoGeral'>
                <div className='CadastroConteudo1'>
                    <img width={300} height={200} src={Imagem30Dias} alt="" />
                    <img id='HomemFeliz' width={296} height={662} src={HomemFeliz} alt="" />
                </div>

                <div className='CadastroConteudo2'>
                    <h1>CADASTRO.</h1>
                    <h1>TESTE GRATUITO!</h1>
                    <form action="/cadastro">
                        <input type="text" name="nome" id="nome" placeholder='Digite seu nome completo'/> 
                        <input type="email" name="" id="" placeholder='Digite seu email' />
                        <input type="number" name="telefone" id="telefone" placeholder='Digite seu telefone'/>
                        <select name="tamanhoEmpresa" id="tamanhoEmpresa">
                            <option value="" disabled selected>Qual o tamanho da empresa?</option>
                            <option value="1-10">1-10 Funcionarios</option>
                            <option value="11-100">11-100 Funcionarios</option>
                            <option value="101-1000">101-1000 Funcionarios</option>
                            <option value="1000+">1000+ Funcionarios</option>
                        </select>
                        <select name="Pais/Regiao" id="PaisRegiao">
                            <option value="PaisRegiao" disabled selected>Pais/Regiao</option>
                            <option value="Brasil">Brasil</option>
                            <option value="USA">USA</option>
                        </select>
                        <select name="idiom" id="Idioma">
                            <option value="Idioma" disabled selected>Idioma</option>
                            <option value="Portugues">Portugues</option>
                            <option value="Ingles">Ingles</option>
                            <option value="Espanhol">Espanhol</option>
                        </select>
                        <button type='submit'>COMEÇAR TESTE!</button>
                    </form>
                    <Link to="/"><img width={180} height={126} src={LogoSalesforce} alt="Logo Salesforce" /></Link>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Cadastro