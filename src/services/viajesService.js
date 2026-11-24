
import { gql } from "@apollo/client";

// Consulta GraphQL para obtener vuelos y hoteles
// según el destino seleccionado.
export const OBTENER_OPCIONES_VIAJE = gql`
  query ObtenerOpcionesViaje($destinoId: Int!) {
    vuelos(destinoId: $destinoId) {
      id
      aerolinea
      fecha
      precio
      disponible
    }

    hoteles(destinoId: $destinoId) {
      id
      nombre
      fechaEntrada
      fechaSalida
      precioNoche
      disponible
    }
  }
`;
