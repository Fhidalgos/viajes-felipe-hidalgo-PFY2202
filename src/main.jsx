
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";

import App from "./App.jsx";
import { apolloClient } from "./services/apolloClient";
import "./index.css";

// Iniciar la aplicación con el backend simulado
async function iniciarAplicacion() {
  const { worker } = await import("./mocks/browser");

  // Activar MSW antes de cargar React
  await worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`
    },
    onUnhandledRequest: "bypass"
  });

  // Conectar Apollo Client con React
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
}

iniciarAplicacion().catch((error) => {
  console.error("Error al iniciar la aplicación:", error);
});
