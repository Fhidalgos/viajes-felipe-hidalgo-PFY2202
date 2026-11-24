
import { Link } from "react-router";

function Inicio() {
  return (
    <main className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 text-center">
        Agencia de Viajes Felipe Hidalgo
      </h1>

      <p className="mt-4 text-lg text-gray-700 text-center">
        Descubre destinos, vuelos y hoteles para tu próximo viaje.
      </p>

      <Link
        to="/destinos"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Explorar destinos
      </Link>
    </main>
  );
}

export default Inicio;
