import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ApolloClient,
  HttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/graphql",
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
