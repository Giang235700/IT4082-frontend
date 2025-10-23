import Authentication from "../components/Authentication.jsx";
import Slideshow from "../components/Slideshow.jsx";
import "./Login.css";

function Login(){
    return(
        <div className="login-container">
            <Slideshow />
            <Authentication />
        </div>
    )
}

export default Login;
