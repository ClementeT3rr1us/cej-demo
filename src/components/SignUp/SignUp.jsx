import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
    return (
        <>
            <div className="signup-body">
                <div className="card-signup">
                    <img src="../src/assets/icon-2.png" width={72} height={72} />
                    <br />
                    <h3>Bem-vindo</h3>
                    <form action="">
                        <input type="text" placeholder="Insira seu nome" required/><br />
                        <input type="email" placeholder="Insira seu email" required/><br />
                        <input type="phone" placeholder="Insira seu celular" required/><br />
                        <input type="password" placeholder="Crie uma senha" required/><br />
                        <input type="password" placeholder="Confirmar senha" required/><br />
                        <input type="submit" value="Criar conta" id="btn" />
                        <br />
                        <label htmlFor="">
                            <Link to="/">Já tem uma conta? <a href="#">logar</a></Link>
                        </label>
                    </form>
                </div>
            </div>
        </>
    );

}