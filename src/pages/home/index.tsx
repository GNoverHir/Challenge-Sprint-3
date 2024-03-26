import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../Componentes/Header'


const Home = () => {

    return(
        <div>

            <Header/>

            <h1>Home</h1>
            <Link to= '/login'>Login</Link> <br/>
            <Link to= '/contact'>contact</Link>
        </div>

    )
}

export default Home