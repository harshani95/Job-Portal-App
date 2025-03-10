import { Route, Routes } from "react-router-dom";
import Application from "./pages/Application";
import ApplyJob from "./pages/ApplyJob";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
      </Routes>
    </>
  );
}

export default App;
