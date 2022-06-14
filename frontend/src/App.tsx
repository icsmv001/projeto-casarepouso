import NavBar from "components/NavBar";
import Footer from "components/Footer";
import React from "react";
import DataTablePaciente from "components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo</h1>

        <DataTablePaciente />
      </div>
      <Footer />
    </>
  );
}

export default App;
