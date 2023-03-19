import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav, ChartCard } from "./Components";
import { useLocalContext } from "./Context/LocalContextProvider";
function App() {
  const { user, setUser, isLoading, searchTerm, setSearchTerm } =
    useLocalContext();

  console.log(user);

  const fetchUser = () => {
    const response = fetch(`${process.env.REACT_APP_API_URL}/auth`);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App flex sm:flex-row flex-col sm:h-screen overflow-hidden gap-2 bg-slate-900 text-gray-100 pl-2">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
