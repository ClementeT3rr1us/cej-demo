import EmpCard from "./components/EmpCard/EmpCard";
import FilterBar from "./components/FilterBar/FilterBar";
import Navbar from "./components/Navbar/Navbar";
import "./Container.css";

const Container = () => {
    return <>
        <div>
            <Navbar />
            <FilterBar />
            <div className="card-emp-container">
                <EmpCard name="Clemente Belchior" career="Engenheiro Civil .Programador" photo="./src/assets/cj.jpg" />
                <EmpCard name="Avinash Pawar" career="Engenheiro Civil" photo="./src/assets/boy1.png" />
                <EmpCard name="Márcia Domingos" career="Arquiteta" photo="./src/assets/girl1.png" />
                <EmpCard name="Arlindo Arnaldo" career="Arquiteto" photo="./src/assets/boy2.png" />
                <EmpCard name="Tatiana Alexandre" career="Engenheira Civil" photo="./src/assets/girl2.png" />
                <EmpCard name="Fulano De Tal" career="Pedreiro" photo="./src/assets/bod.png" />
                <EmpCard name="Fulano De Tal" career="Pedreiro" photo="./src/assets/bod.png" />
                <EmpCard name="Fulano De Tal" career="Pedreiro" photo="./src/assets/bod.png" />
                <EmpCard name="Fulano De Tal" career="Pedreiro" photo="./src/assets/bod.png" />
                <EmpCard name="Fulano De Tal" career="Pedreiro" photo="./src/assets/bod.png" />
                <EmpCard name="Fulano De Tal" career="Pedreiro" photo="./src/assets/bod.png" />
                <EmpCard name="Fulano De Tal" career="Pedreiro" photo="./src/assets/bod.png" />

            </div>
        </div>
    </>
}

export default Container;
