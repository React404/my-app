import { render } from "react-dom";

import "./App.css";
import Nav from "./components/nav";

import Error from "./components/error404";

function App() {
  return (
    <>
      <Nav />
      <main className=" container p-2">
        <Error />
      </main>
    </>
  );
}

export default App;
