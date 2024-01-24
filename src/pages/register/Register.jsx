import Topbar from '../header/Header';

export default function Register() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  
  const handleClick = async (e) => {
    e.preventDefault();
   if(confirmPassword.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords don't match!");
   }else{
   /*  const user = {
      email: email.current.value,
      password: password.current.value
    } */
    try{
      /* await axios.post("/auth/register", user);
      history.push("/login"); */
    }catch(err){
      console.log(err);
    }
   }  
}
  return (
    <>
    <Topbar />
    <div className="register">
    <div className="wrapper">
        <div className="registerLeft">
            <h3 className="registerLogo">Sentire App</h3>
            <span className="registerDesc">
            Register to keep in touch with your listening friends
            </span>
        </div>
        <div className="registerRight">
            <form className="registerBox" onSubmit={handleClick}>
                <input placeholder='email' required id="email" className="registerInput" type="email" />
                <input placeholder='password' required id="password" className="registerInput" type="password" minLength="6" />
                <input placeholder='confirm password' required id="confirm-password" className="registerInput" type="password" />
                <button className="registerButton" type="submit">Sign up</button>     
                <button className="loginButton">Log into Account</button>
            </form>           
        </div>
    </div>
    </div>
    </>
  )
}
