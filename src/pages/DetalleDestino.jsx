
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useQuery } from "@apollo/client/react";

import { OBTENER_OPCIONES_VIAJE } from "../services/viajesService";
import { obtenerDestinos } from "../services/destinosService";
import TarjetaOpcion from "../components/TarjetaOpcion";

function DetalleDestino() {
  const { id } = useParams();

  const destinoId = Number(id);
  const idValido =
    Number.isInteger(destinoId) && destinoId > 0;

  const [destino, setDestino] = useState(null);

  // Consultar el nombre del destino desde REST
  useEffect(() => {
    if (!idValido) return;

    let activo = true;

    async function cargarDestino() {
      try {
        const destinos = await obtenerDestinos();

        const encontrado = destinos.find(
          (item) => item.id === destinoId
        );

        if (activo) {
          setDestino(encontrado || null);
        }
      } catch (error) {
        console.error("Error al consultar destino:", error);
      }
    }

    cargarDestino();

    return () => {
      activo = false;
    };
  }, [destinoId, idValido]);

  // Consultar vuelos y hoteles mediante GraphQL
  const { loading, error, data } = useQuery(
    OBTENER_OPCIONES_VIAJE,
    {
      variables: {
        destinoId: idValido ? destinoId : 0
      },
      skip: !idValido
    }
  );

  if (!idValido) {
    return (
      <main className="max-w-6xl mx-auto p-6">
        <p className="text-red-600">
          El destino solicitado no es válido.
        </p>

        <Link to="/destinos" className="text-blue-600 underline">
          Volver a destinos
        </Link>
      </main>
    );
  }

  const vuelos = data?.vuelos ?? [];
  const hoteles = data?.hoteles ?? [];

  return (
    <main className="min-h-screen bg-sky-50 p-6">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/destinos"
          className="inline-block text-blue-600 hover:underline mb-6"
        >
          ← Volver a destinos
        </Link>

        <h1 className="text-3xl font-bold text-blue-800 mb-3">
          {destino
            ? `Viajes a ${destino.nombre}`
            : "Opciones de viaje"}
        </h1>

        {destino && (
          <p className="text-gray-700 mb-8">
            País: {destino.pais}
          </p>
        )}

        {loading && (
          <p role="status" className="text-gray-600">
            Consultando vuelos y hoteles...
          </p>
        )}

        {error && (
          <p role="alert" className="text-red-600">
            No se pudo consultar la información de viajes.
          </p>
        )}

        {!loading && !error && (
          <>
            {/* Sección de vuelos */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-5">
                Vuelos disponibles
              </h2>

              {vuelos.length === 0 ? (
                <p className="text-gray-600">
                  No hay vuelos registrados para este destino.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vuelos.map((vuelo) => (
                    <TarjetaOpcion
                      key={vuelo.id}
                      titulo={vuelo.aerolinea}
                      detalles={[
                        {
                          etiqueta: "Fecha",
                          valor: vuelo.fecha
                        }
                      ]}
                      precio={vuelo.precio}
                      etiquetaPrecio="Precio del vuelo"
                      disponible={vuelo.disponible}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Sección de hoteles */}
            <section>
              <h2 className="text-2xl font-bold text-blue-800 mb-5">
                Hoteles disponibles
              </h2>

              {hoteles.length === 0 ? (
                <p className="text-gray-600">
                  No hay hoteles registrados para este destino.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hoteles.map((hotel) => (
                    <TarjetaOpcion
                      key={hotel.id}
                      titulo={hotel.nombre}
                      detalles={[
                        {
                          etiqueta: "Entrada",
                          valor: hotel.fechaEntrada
                        },
                        {
                          etiqueta: "Salida",
                          valor: hotel.fechaSalida
                        }
                      ]}
                      precio={hotel.precioNoche}
                      etiquetaPrecio="Precio por noche"
                      disponible={hotel.disponible}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default DetalleDestino;
