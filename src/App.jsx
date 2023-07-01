import { useContext} from "react";
import "../src/style/App.css";
import { AuthContext } from "./context/AuthContext";
import { Home } from "./pages/Home/Home";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";

function App() {
  const { enter, setEnter } = useContext(AuthContext);

  return <div className="App"> { enter ? <WelcomePage/> :  <Home/>  }</div>;
}

export default App;
