import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="  erase-alert  jumbotron bg-secundario">
          <h1 className="display-4"> Casa De Repouso Chácara Odélia</h1>
          <p className="lead bg-secundario">
            <h4>
              {" "}
              Ambiente Agradável, Amplo Espaço, Área Verde e de Fácil Acesso.{" "}
            </h4>
          </p>
          <hr />
          <p align-items-center bg-secundario>
            A casa de repouso Odélia, tem como missão garantir a estadia de seu
            ente querido, assegurando conforto, carinho, lazer e qualidade de
            vida. Sempre mantendo o maior respeito, num um ambiente agradável,
            seguro e tranquilo.
          </p>

          {/* <Link className="btn btn-primary btn-lg" to="/ListarPaciente">
            Lista de Pacientes
          </Link> */}

          <hr />
          <p>
            Com equipes especializadas de cuidadores 24hrs para garantir
            integridade do paciente, realizando o tratamento e cuidados
            específicos para cada idoso, sempre com atendimento personalizado ao
            paciente. Com uma infraestrutura completa, o local permite a
            sociabilização do paciente e conta com atividades para a distração
            do idoso. Possuímos cozinha própria onde são preparadas refeições
            balanceadas, com cardápio elaborado e orientado por nutricionista.
          </p>
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
