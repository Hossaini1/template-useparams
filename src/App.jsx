import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./pages/UserDetails";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("fetch error", error);
      }
    })();
  }, []);

  return (
    <div>
      <div>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/users" >Users</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList usersData={user} />} />
        <Route path="/users/:userId" element={<UserDetails usersData={user} />} />
        
      </Routes>
      
    </div>
  );
}
export default App;
