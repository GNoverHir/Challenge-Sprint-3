import './style.css'
import Imagem30Dias from '../../assets/30 dia salesforce.png'
import HomemFeliz from '../../assets/homem feliz.svg'
import LogoSalesforce from '../../assets/logoSalesforce.svg'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const ConjuntoCadastro = () => {


    const [Name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Tel, setTel] = useState(0)
    const [TamEmpresa, setTamEmpresa] = useState()
    const [Pais, setPais] = useState ("")
    const [Idioma, setIdioma] = useState ("")
    const [Senha, setSenha] = useState("")


    // const req = async () => {

    //             axios.post("http://localhost:8080/usuario/cadastro", {
    //                 "nomeCompleto": Name,
    //                 "email": email,
    //                 "telefone": Tel,
    //                 "tamanhoEmpresa": TamEmpresa,
    //                 "pais": Pais,
    //                 "idioma": Idioma,
    //                 "senha": Senha
    // }
    // )

    // }

    

    const req = async ()=> {
    try{
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/usuario",
        headers: {"Content-Type": "application/json"},
        data: {
            
                "nomeCompleto": Name,
                "email": email,
                "telefone": Tel,
                // "tamanhoEmpresa": TamEmpresa,
                // "pais": Pais,
                // "idioma": Idioma,
                "senha": Senha

                    // "nomeCompleto": "TestePosTrauma",
                    // "email": "Pos@Trauma",
                    // "telefone": 99999999,
                    // "tamanhoEmpresa": 6661232,
                    // "pais": "EUA",
                    // "idioma": "Twanes",
                    // "senha": "Trauma123"
            
        }
      })
      console.log(response);
    }catch(err){
      console.log(err)
      
    }
  }

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
                    <section className='formulario'>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="nome" id="nome" placeholder='Digite seu nome completo'/> 
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder='Digite seu email' />
                        <input onChange={(e) => setSenha(e.target.value)} type="password" name="senha" id="senha" placeholder='Cadastre uma senha!'/>
                        <input onChange={(e) => setTel(parseInt(e.target.value))} type="number" name="telefone" id="telefone" placeholder='Digite seu telefone'/>
                        {/* <input onChange={(e) => setTamEmpresa(e.target.value)} type="number" name='tamanhoEmpresa' id='tamanhoEmpresa' placeholder='Quantos funcionário tem na sua empresa' />
                        <input onChange={(e) => setPais(e.target.value)} type="text" name="Pais" id="Pais" placeholder='Qual o seu pais'/>
                        <input onChange={(e) => setIdioma(e.target.value)} type="text" name="Idioma" id="Idioma" placeholder='Qual seu idioma?'/> */}
                        
                        
                        {/* <select onChange={(e) => setPais(e.target.value)} name="Pais/Regiao" id="PaisRegiao">
                            <option value="PaisRegiao" disabled selected>Pais/Regiao</option>
                            <option value="Brasil">Brasil</option>
                            <option value="USA">USA</option>
                        </select>
                        <select onChange={(e) => setIdioma(e.target.value)} name="idiom" id="Idioma">
                            <option value="Idioma" disabled selected>Idioma</option>
                            <option value="Portugues">Portugues</option>
                            <option value="Ingles">Inglês</option>
                            <option value="Espanhol">Espanhol</option>
                        </select> */}
                        <button onClick={req}>COMEÇAR TESTE!</button>
                    </section>
                    <Link to="/"><img width={180} height={126} src={LogoSalesforce} alt="Logo Salesforce" /></Link>
                </div>
            </div>
        </div>
    )
}

export default ConjuntoCadastro