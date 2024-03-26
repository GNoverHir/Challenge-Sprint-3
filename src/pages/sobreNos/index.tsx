import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../Componentes/header'
import FooterComCenario from '../../Componentes/footerComCenario/'
import ConjuntoSobreNos from '../../Componentes/conjuntoSobreNos'

const SobreNos = () => {

    return(
        <div>
            <Header/>
            <ConjuntoSobreNos/>
            <FooterComCenario/>
        </div>
    )
}

export default SobreNos