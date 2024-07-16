import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Header />}></Route>
      </Routes>
    </>
  );
}

export default App;
