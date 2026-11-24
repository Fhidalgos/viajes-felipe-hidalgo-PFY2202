
export async function obtenerDestinos() {
  const respuesta = await fetch(
    `${import.meta.env.BASE_URL}api/destinos`
  );

  if (!respuesta.ok) {
    throw new Error("No se pudieron obtener los destinos.");
  }

  const destinos = await respuesta.json();

  return destinos;
}
