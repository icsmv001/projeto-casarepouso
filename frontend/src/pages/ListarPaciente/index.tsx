import DataTablePaciente from "components/DataTableList";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const ListarPaciente = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Lista De Pacientes</h1>

        <DataTablePaciente />
      </div>
      <Footer />
    </>
  );
};

export default ListarPaciente;
