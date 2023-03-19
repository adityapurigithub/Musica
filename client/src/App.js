import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav, ChartCard } from "./Components";
import { useLocalContext } from "./Context/LocalContextProvider";
function App() {
  const {
    user,
    setUser,
    isLoading,
    searchTerm,
    setSearchTerm,
    getNewReleased,
    getTracks,
  } = useLocalContext();

  const token = Cookies.get("token");

  const fetchUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const { user } = await response.json();
      console.log(user);
      setUser(user);
    }
  };

  useEffect(() => {
    // fetchUser();
    getTracks("charts/track");
  }, []);

  return (
    <div className="App flex sm:flex-row flex-col sm:h-screen overflow-hidden gap-2 bg-slate-900 text-gray-100">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
