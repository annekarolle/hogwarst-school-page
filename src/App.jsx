 
import "../src/style/App.css";
 
import { Home } from "./pages/Home/Home";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { Route, Routes } from "react-router-dom";
import { BookOfSpells } from "./pages/BookOfSpells/BookOfSpells";
import { useState } from "react";

function App() {



  const [showPage, setShowPage] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <div className={`page ${showPage ? 'page-enter-active' : 'page-exit-active'}`}>
              <Home setShowPage={setShowPage} />
            </div>
          }
        />
   <Route path="/" element={<WelcomePage />} />   
        <Route path="/bookOfSpells" element={<BookOfSpells />} />
      </Routes>
    </div>
  );
}

export default App;