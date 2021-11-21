import "bootstrap/dist/css/bootstrap.min.css";
import { TestUi } from "../src/components/TestUi";
import Content from "./components/Content";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
