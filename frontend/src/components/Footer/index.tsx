import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por :
          <a className="btn-chegar corAzul semsublinado">
            Izael Coutinho Da Silva
          </a>
        </p>
        <p className="text-light ">
          <small>
            <strong>Projeto Gestao de Casa de Repouso</strong>
            <br />
            Desenvolvido em React com BootStrap:{" "}
            <a className="btn-chegar corAzul semsublinado">
              projeto-casarepouso
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
