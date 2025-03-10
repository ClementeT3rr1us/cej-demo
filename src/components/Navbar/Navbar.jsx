
import "./BarLoader.js"
import "./Navbar.css"

export default function Navbar() {

    return (
        <div>
            <div className="navbar-body">
                <nav>
                    <img src="./src/assets/icon-2.png" className="bar-icon" />
                    <div className="bar-links">
                        <li className="bar-item">
                            Home
                        </li>
                        <li className="bar-item">
                            Empresas
                        </li>
                        <li className="bar-item">
                            Anúncios
                        </li>
                        <li className="bar-item">
                            Contactos
                        </li>
                        <li className="bar-item">
                            Sobre
                        </li>
                    </div>
                    <button className="btnBar" id="btnBar" onClick={barControl}>
                        <img src="./src/assets/ic_bar.png" />
                    </button>
                </nav>
            </div>
        </div>
    );
}

