import GlobyleStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  const a = window.screen;
  console.log(a);
  return (
    <div className="App">
      <GlobyleStyle />
      <Nav />
      {/* <progress
        style={{
          width: "100%",
          backgroundColor: "transparent",
          color: "blueviolet",
          border: "0",
          position: "sticky",
          top: "10vh",
        }}
        id="file"
        value="32"
        max="100"
      >
        {" "}
        32%{" "}
      </progress> */}
      <Switch>
        <Route path="/" exact>
          <Main />
          <Cards />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
