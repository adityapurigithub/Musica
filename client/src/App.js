import { Outlet } from "react-router-dom";
import { Nav, ChartCard } from "./Components";

function App() {
  return (
    <div className="App flex sm:flex-row flex-col sm:h-screen overflow-hidden gap-2 bg-slate-900 text-gray-100 pl-2">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
