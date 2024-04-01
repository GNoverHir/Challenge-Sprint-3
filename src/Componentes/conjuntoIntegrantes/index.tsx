import './style.css'
import Pedro from '../../assets/Pedro.png'
import Carlos from '../../assets/Carlos.png'
import Jhemysson from '../../assets/Jhemysson.png'

const ConjuntoIntegrantes = () => {

    return(
        <>
            <div className='ConteudoIntegrantesGeral'>
                <div className='Card'>
                    <img width={100} height={80} src={Pedro} alt="" />
                    <ul>
                        <li>Pedro Lucca Medeiros Miranda</li>
                        <li>RM553873</li>
                        <li>RM553873@fiap.com.br</li>
                    </ul>
                </div>

                <div className='Card'>
                    <img width={100} height={100} src={Jhemysson} alt="" />
                    <ul>
                        <li>Jhemysson Moura Vieira</li>
                        <li>RM552570</li>
                        <li>RM552570@fiap.com.br</li>
                    </ul>
                </div>

                <div className='Card'>
                    <img width={100} height={100} src={Carlos} alt="" />
                    <ul>
                        <li>Carlos Eduardo Ariza Sartorio</li>
                        <li>RM553461</li>
                        <li>RM553461@fiap.com.br</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ConjuntoIntegrantes