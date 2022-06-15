import React, { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "pages/Home";
import ListarPaciente from "pages/ListarPaciente";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listarPaciente" element={<ListarPaciente />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
