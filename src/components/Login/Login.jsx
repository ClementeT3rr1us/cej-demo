import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate();

    function login() {

        return navigate("/home");
    }

    return (
        <>
            <div className="login-body">
                <div className="card-login">
                    <img src="../src/assets/icon.png" width={72} height={72} />
                    <br />
                    <h3>Insira seus dados</h3>
                    <form action="">
                        <input type="text" placeholder="Insira sua senha" /><br />
                        <input type="password" placeholder="Informe sua senha" /><br />
                        <label>
                            <a href="#">Esqueceu a senha?</a>
                        </label><br />
                        <input type="submit" value="Login" id="btn" onClick={login} />
                    </form>

                </div>
                <p className="paragraph">
                    <Link to="/signup"><a href="#">Criar conta</a></Link>
                </p>
            </div>
        </>
    );
}

