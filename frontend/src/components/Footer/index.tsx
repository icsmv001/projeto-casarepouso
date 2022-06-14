import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/acenelio"
            target="_blank"
            rel="noreferrer"
          >
            Izael Coutinho da Silva
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Projeto Gestao de Casa de Repouso</strong>
            <br />
            Desenvolvimento e Estudo em React com BootStrap:{" "}
            <a
              href="https://github.com/icsmv001/projeto-casarepouso"
              target="_blank"
              rel="noreferrer"
            >
              @projeto-casarepouso
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
