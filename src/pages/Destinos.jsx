
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { obtenerDestinos } from "../services/destinosService";
import TarjetaDestino from "../components/TarjetaDestino";

function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;

    async function cargarDestinos() {
      try {
        const datos = await obtenerDestinos();

        if (activo) {
          setDestinos(datos);
        }
      } catch {
        if (activo) {
          setError("No se pudieron cargar los destinos.");
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarDestinos();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-sky-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Destinos disponibles
        </h1>

        <p className="text-gray-700 mb-6">
          Explora nuestros destinos y descubre las
          actividades que puedes realizar.
        </p>

        <Link
          to="/"
          className="inline-block text-blue-600 hover:underline mb-6"
        >
          Volver al inicio
        </Link>

        {cargando && (
          <p role="status" className="text-gray-600">
            Cargando destinos...
          </p>
        )}

        {error && (
          <p role="alert" className="text-red-600">
            {error}
          </p>
        )}

        {!cargando && !error && destinos.length === 0 && (
          <p className="text-gray-600">
            No hay destinos disponibles.
          </p>
        )}

        {!cargando && !error && destinos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinos.map((destino) => (
              <TarjetaDestino
                key={destino.id}
                destino={destino}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Destinos;
