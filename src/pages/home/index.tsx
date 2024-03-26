
import './style.css'
import Header from '../../Componentes/header'
import SalesforceAndCRM from '../../Componentes/conjuntoSalesforceCRM'
import ConjuntoQueridinhos from '../../Componentes/conjuntoQueridinhos'

const Home = () => {

    return(
        <div>
            <Header/>
            <SalesforceAndCRM/>
            <ConjuntoQueridinhos/>
        </div>

    )
}

export default Home