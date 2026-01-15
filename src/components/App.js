import { Routes, Route} from "react-router-dom";
import logo from "../assets/image.png";

import Home from "./Home";
import Diploma from "./Diploma";
import About from "./About";
import Header from "./Header";
import Diplomas from "./Diplomas";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="about" element={<About />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":catId" element={<Diploma />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a Category from above</h3>}/>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
