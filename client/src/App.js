import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav, ChartCard, Footer } from "./Components";
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
    getLatest,
    getPlaylist,
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
    fetchUser();
    getTracks("charts/track");
    getNewReleased("search?term=new%20released%20songs");
    getLatest("search?term=latest%20songs");
    getPlaylist();
  }, [token]);

  return (
    <div className="App flex sm:flex-row flex-col sm:h-[100vh] overflow-hidden gap-2 bg-slate-900 text-gray-100">
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
