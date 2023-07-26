import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Routes } from "react-router-dom";

const query = gql`
  query Query {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

function App() {
  const result = useQuery(query);
  console.log(result);
  return (
    <section>
      <p>dasd</p>
      <div className="maincontainer">
        <Routes></Routes>
      </div>
    </section>
  );
}

export default App;
