 
import "../src/style/App.css";
 
import { Home } from "./pages/Home/Home";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";

import { Route, Routes } from "react-router-dom";
import { BookOfSpells } from "./pages/BookOfSpells/BookOfSpells";

function App() {
  // const { enter, setEnter } = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<WelcomePage />} />
   
        <Route path="/bookOfSpells" element={<BookOfSpells />} />
      </Routes>
    </div>
  );
}

export default App;