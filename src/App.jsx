import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import { Home } from "./views/Home";
import { Detail } from "./views/Detail";
import { CreateActitivy } from "./views/CreateActitivy";
import { Default } from "./views/Default";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<CreateActitivy />} />
        <Route path="/*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
