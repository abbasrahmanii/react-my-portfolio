import GlobyleStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <GlobyleStyle />
      <Nav />
      <Main />
      <Cards />
    </div>
  );
}

export default App;
