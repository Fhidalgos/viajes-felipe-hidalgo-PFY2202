
import { Link } from "react-router";

function TarjetaDestino({ destino }) {
  return (
    <article className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        {destino.nombre}
      </h2>

      <p className="text-gray-700 mb-4">
        <strong>País:</strong> {destino.pais}
      </p>

      <h3 className="font-semibold text-gray-800 mb-2">
        Actividades populares:
      </h3>

      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {destino.actividades.map((actividad) => (
          <li key={actividad}>{actividad}</li>
        ))}
      </ul>

      <Link
        to={`/destinos/${destino.id}`}
        className="inline-block mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
      >
        Ver vuelos y hoteles
      </Link>
    </article>
  );
}

export default TarjetaDestino;
