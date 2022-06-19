import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="  erase-alert  jumbotron bg-secundario">
          <h1 className="display-4"> Casa de Repouso Odélia</h1>
          <p className="lead bg-secundario">
            <h4>
              {" "}
              Ambiente Agradável, Amplo Espaço, Área Verde e de Fácil Acesso.{" "}
            </h4>
          </p>
          <hr />
          <p align-items-center bg-secundario>
            A casa De Repouso Odélia, tem como missão garantir a estadia de seu
            ente querido com o maior conforto, mantendo cuidadores 24hrs para
            garantir sua integridade.
          </p>

          {/* <Link className="btn btn-primary btn-lg" to="/ListarPaciente">
            Lista de Pacientes
          </Link> */}

          <hr />
          <Link className="btn btn-primary btn-lg  " to="/Localizacao">
            Localizacao
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
