import "./App.css";
import InputForm from "./Components/InputForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Components/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
