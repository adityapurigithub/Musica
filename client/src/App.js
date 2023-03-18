import { Outlet } from "react-router-dom";
import { Nav, ChartCard } from "./Components";

function App() {
  return (
    <div className="App flex sm:flex-row flex-col sm:h-screen overflow-hidden gap-3 bg-[#1E1E1E] text-gray-100 sm:px-4 py-3">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
