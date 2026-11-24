
import { http, HttpResponse } from "msw/http";
import { graphql } from "msw/graphql";

import { destinos } from "./destinos";
import { vuelos, hoteles } from "./viajes";

// Endpoint simulado de GraphQL
const apiGraphQL = graphql.link("*/graphql");

export const handlers = [

  // API REST mock: obtener destinos turísticos
  http.get("*/api/destinos", () => {
    return HttpResponse.json(destinos);
  }),

  // API GraphQL mock: consultar vuelos y hoteles
  apiGraphQL.query("ObtenerOpcionesViaje", ({ variables }) => {

    const destinoId = Number(variables.destinoId);

    const vuelosDestino = vuelos.filter(
      (vuelo) => vuelo.destinoId === destinoId
    );

    const hotelesDestino = hoteles.filter(
      (hotel) => hotel.destinoId === destinoId
    );

    return HttpResponse.json({
      data: {
        vuelos: vuelosDestino,
        hoteles: hotelesDestino
      }
    });
  })
];
