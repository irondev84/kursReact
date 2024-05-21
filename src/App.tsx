import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-2xl text-emerald-800">Witaj w React!</h1>

        <Outlet />
      </div>
    </>
  );
}

export default App;
