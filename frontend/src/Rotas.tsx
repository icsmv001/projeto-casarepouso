import React, { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "pages/Home";
import ListarPaciente from "pages/ListarPaciente";
import Localizacao from "pages/Localizacao";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listarPaciente" element={<ListarPaciente />} />
        <Route path="/localizacao" element={<Localizacao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
