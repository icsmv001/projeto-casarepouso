import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por :
          <span className="btn-chegar corAzul semsublinado">
            Izael Coutinho Da Silva
          </span>
        </p>
        <p className="text-light ">
          <small>
            <strong>Projeto Gestao de Casa de Repouso</strong>
            <br />
            Desenvolvido em React com BootStrap:{" "}
            <span className="btn-chegar corAzul semsublinado">
              projeto-casarepouso
            </span>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
