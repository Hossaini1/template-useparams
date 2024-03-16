import { useParams } from "react-router-dom";

function UserDetails({ usersData }) {
  const { userId } = useParams();
  const userfound = usersData.find(elem => elem.id === parseInt(userId));
 
  

  return (
    <div>
      UserDetails
    <ul>
      <li>{userfound.name}</li>
      <li>{userfound.phone}</li>
      <li>{userfound.website}</li>
      
    </ul>
    </div>
  );
}
export default UserDetails;
