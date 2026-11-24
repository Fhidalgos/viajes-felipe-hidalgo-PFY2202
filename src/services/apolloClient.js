
import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

// Configuración de la conexión GraphQL
const httpLink = new HttpLink({
  uri: `${import.meta.env.BASE_URL}graphql`
});

// Cliente Apollo para nuestra aplicación
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
