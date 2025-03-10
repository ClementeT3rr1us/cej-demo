import "./EmpCard.css";

const EmpCard = (emp)=>{
    return(
        <>
          <div className="empcard-body">
            <img src={emp.photo} alt="" className="emp-photo"/>
            <h3 className="emp-name">{emp.name}</h3>
            <p className="emp-career">
                {emp.career}
            </p>
            <p>
                ---Sobre---
            </p>
            <p className="txt-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quasi, iste pariatur magnam quo officiis vitae reprehenderit <br />
                 
            </p>
            <button className="btn-see">
                Ver mais
            </button>
          </div>
        </>
    );
}

export default EmpCard;