# Agencia de Viajes – Sumativa Semana 5

**Asignatura:** Desarrollo Frontend II (PFY2202)  
**Estudiante:** Felipe Hidalgo  
**Tecnología principal:** React + Vite

## Descripción

Aplicación web de una agencia de viajes que permite explorar distintos destinos turísticos y consultar opciones de vuelos y hoteles, incluyendo precios, fechas y disponibilidad.

El proyecto utiliza APIs simuladas para representar la comunicación con servicios REST y GraphQL.

## Tecnologías utilizadas

- React y Vite
- JavaScript
- Tailwind CSS
- React Router
- Apollo Client y GraphQL
- Mock Service Worker (MSW)
- Git y GitHub

## Funcionalidades

- Listado de cuatro destinos turísticos.
- Visualización del país y actividades populares de cada destino.
- Consulta de destinos mediante una API REST simulada.
- Consulta de vuelos y hoteles mediante una API GraphQL simulada.
- Visualización de precios en pesos chilenos (CLP).
- Información sobre fechas y disponibilidad.
- Navegación entre páginas utilizando React Router.
- Diseño responsivo para computadores, tablets y dispositivos móviles.
- Manejo de estados de carga y errores en las consultas.

## Estructura del proyecto

- `src/components/`: componentes reutilizables.
- `src/pages/`: páginas de la aplicación.
- `src/routes/`: configuración de rutas.
- `src/services/`: servicios REST y configuración de Apollo Client.
- `src/mocks/`: datos y controladores de las APIs simuladas.

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Fhidalgos/viajes-felipe-hidalgo-PFY2202.git
```

Ingresar al directorio del proyecto e instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir la dirección local indicada por Vite.

## Comandos disponibles

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Pruebas realizadas

- Consulta de destinos mediante REST.
- Consulta de vuelos y hoteles mediante GraphQL.
- Navegación entre páginas con React Router.
- Visualización de opciones disponibles y no disponibles.
- Pruebas de diseño responsivo.
- Pruebas de compatibilidad con Microsoft Edge, Google Chrome y Mozilla Firefox.
- Revisión de código con Oxlint sin errores ni advertencias.
- Compilación de producción exitosa.

## Consideraciones

Las APIs REST y GraphQL son simuladas mediante MSW. Los destinos, vuelos, hoteles y precios son datos de demostración; no corresponden a reservas reales.

## Repositorio

https://github.com/Fhidalgos/viajes-felipe-hidalgo-PFY2202

## Autor

Felipe Hidalgo  
Desarrollo Frontend II – PFY2202
