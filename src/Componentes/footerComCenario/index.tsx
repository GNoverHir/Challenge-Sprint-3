import './style.css'
import CenarioFooter from '../../assets/Fundo Footer.svg'

const FooterComCenario = () => {

    return(
        <footer className='Fundo'>
            <img src={CenarioFooter} alt="" />
            <ul>
                <li>© 2020 Name.</li>
                <li>© 2020 Name. All rights reserved.</li>
                <li>Copyright © 2020 Name.</li>
                <li>Copyright © 2020 Name. All rights reserved.</li>
            </ul>
        </footer>
    )
}

export default FooterComCenario