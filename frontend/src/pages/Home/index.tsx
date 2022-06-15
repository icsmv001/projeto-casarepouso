import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4"> Casa de Repouso</h1>
          <p className="lead">
            Anbiente Agradavel, Amplo Espaço e Area Verde, Facil Acesso.
          </p>
          <hr />
          <p>
            A casa De Repouso, tem como missão garantir a estadia de seu ente
            querido com o maior conforto e mantendo cuidadores 24hrs para
            garantir sua integridade.
          </p>

          <Link className="btn btn-primary btn-lg" to="/ListarPaciente">
            Lista de Pacientes
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
