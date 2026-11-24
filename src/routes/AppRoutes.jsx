
import { Routes, Route, Link } from "react-router";

import Inicio from "../pages/Inicio";
import Destinos from "../pages/Destinos";
import DetalleDestino from "../pages/DetalleDestino";

function AppRoutes() {
  return (
    <Routes>
      {/* Pantalla de inicio */}
      <Route
        path="/"
        element={<Inicio />}
      />

      {/* Destinos obtenidos mediante API REST mock */}
      <Route
        path="/destinos"
        element={<Destinos />}
      />

      {/* Vuelos y hoteles obtenidos mediante GraphQL mock */}
      <Route
        path="/destinos/:id"
        element={<DetalleDestino />}
      />

      {/* Ruta para páginas inexistentes */}
      <Route
        path="*"
        element={
          <main className="min-h-screen bg-sky-50 p-6">
            <h1 className="text-2xl font-bold text-blue-800">
              Página no encontrada
            </h1>

            <p className="mt-3 text-gray-700">
              La página solicitada no existe.
            </p>

            <Link
              to="/"
              className="inline-block mt-4 text-blue-600 underline"
            >
              Volver al inicio
            </Link>
          </main>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
