import {useRef} from 'react';
import Topbar from '../header/Header';
/* import {loginCall} from '../../apiCalls'; */
/* import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from '@material-ui/core'; */

export default function Login() {
  const email = useRef();
  const password = useRef();
  /* const {user, isFetching, error, dispatch} = useContext(AuthContext); */
  const handleClick = (e) => {
    e.preventDefault();
    /* console.log(email.current.value); */
    /* loginCall({email:email.current.value,password: password.current.value}, dispatch); */
        
  }
  return (
    <>
    <Topbar />
    <div className="login">
    <div className="wrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Sentire App</h3>
            <span className="loginDesc">
            Connect with your listening friends all over the world
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder='email' type="email" className="loginInput" ref={email} required />
                <input placeholder='password' type="password" className="loginInput" ref={password} required minLength="6" />
                <button className="loginButton">Log in</button>
                <span className="forgotPassword">Forgot password ?</span>
                <button className="registerButton">Create a new account</button>     
            </form>          
        </div>
    </div>
    </div>
    </>
  )
}
