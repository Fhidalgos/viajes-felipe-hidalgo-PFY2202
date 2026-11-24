
const formatoPrecio = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});

function TarjetaOpcion({
  titulo,
  detalles,
  precio,
  etiquetaPrecio,
  disponible
}) {
  return (
    <article className="bg-white rounded-xl shadow-md p-6 border border-gray-200 h-full">

      <h3 className="text-xl font-bold text-blue-700 mb-4">
        {titulo}
      </h3>

      <div className="space-y-2 text-gray-700">
        {detalles.map((detalle) => (
          <p key={detalle.etiqueta}>
            <strong>{detalle.etiqueta}:</strong>{" "}
            {detalle.valor}
          </p>
        ))}

        <p>
          <strong>{etiquetaPrecio}:</strong>{" "}
          {formatoPrecio.format(precio)}
        </p>
      </div>

      <span
        className={`inline-block mt-5 px-4 py-2 rounded-lg font-semibold ${
          disponible
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {disponible ? "Disponible" : "No disponible"}
      </span>

    </article>
  );
}

export default TarjetaOpcion;
