import Header from "../../Componentes/Header"
import SalesforceAndCRM from '../../Componentes/conjuntoSalesforceCRM'
import ConjuntoQueridinhos from '../../Componentes/conjuntoQueridinhos'
import FooterComCenario from '../../Componentes/footerComCenario'

const Home = () => {

    return(
        <div>
            <Header/>
            <SalesforceAndCRM/>
            <ConjuntoQueridinhos/>
            <FooterComCenario/>
        </div>

    )
}

export default Home