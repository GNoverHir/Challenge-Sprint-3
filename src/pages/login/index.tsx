import { Link } from 'react-router-dom'
import './style.css'

const Login = () => {

    return(
        <div>
            <h1>Login</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Login