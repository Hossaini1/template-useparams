import { Link } from "react-router-dom";
import UserDetails from "../pages/UserDetails";

function UserList({ usersData }) {
  const usersSorted = usersData.sort((a, b) =>
    a.username.localeCompare(b.username)
  );
  return (
    <div>
      UserList Seite
      <p>users:{usersData.length}</p>
      <ul>
        {usersSorted.map((user, index) => (
          <li key={user.id}>
            UserName: {index + 1}
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
   
    </div>
  );
}
export default UserList;
