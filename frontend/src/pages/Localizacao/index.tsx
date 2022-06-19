import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Localizacao = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4"> Casa de Repouso Odélia</h1>
          <p className="lead">
            <h6>Av. Alda,3833 - São Paulo - SP - Cep:044276-240.</h6>
          </p>
          <p className="lead">
            {" "}
            <h6>CNPJ:19.752.840/0001-39 </h6>
          </p>
          <hr />

          <p>
            A casa De Repouso, tem como missão garantir a estadia de seu ente
            querido com o maior conforto e mantendo cuidadores 24hrs para
            garantir sua integridade.
          </p>
        </div>

        <p className="text-light">
          <a
            href="https://www.google.com/maps/place/CASA+DE+REPOUSO+CH%C3%81CARA+OD%C3%89LIA+LTDA/@-23.7137454,-46.628384,15z/data=!4m5!3m4!1s0x0:0x2e31dd0c6a2439a3!8m2!3d-23.7137454!4d-46.628384"
            target="_blank"
            rel="noreferrer"
          >
            <h6>Como Chegar </h6>
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Localizacao;
