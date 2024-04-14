import { useEffect, useState } from "react";
import style from "./Home.module.css";
// import react from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  let [user, setUser] = useState([]);
  let [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Employees")
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        console.log("errrrrrrrrr");
        setReload(true);
      });
  }, [reload]);

  let deleteUser = (id) => {
    axios.delete(`http://localhost:5000/Employees/${id}`);
    setReload(false);
  };

  return (
    <div id={style.userpage}>
      {user.map((user) => {
        return (
          <div>
            {/* <table>
              <h2>User Details</h2>
              <tr>
                <td>Name:</td>
                <td>{user.empName}</td>
              </tr>
              <tr>
                <td>Company:</td>
                <td>{user.empCompany}</td>
              </tr>
              <tr>
                <td>Salary:</td>
                <td>{user.empSalary}</td>
              </tr>
              <div>
              <button>
                <Link to={`/edit/${user.id}`}>EDIT</Link>
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >DELETE</button>
              </div>
            </table> */}
            <h2>User Details</h2>

            <h5>Name: {user.empName}</h5>           

            <h5>Company: {user.empCompany}</h5>
          

            <h5>Salary: {user.empSalary}</h5>
            

            <div>
              <button>
                <Link to={`/edit/${user.id}`}>EDIT</Link>
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >DELETE</button>
              </div>
          </div>

        );
      })}
    </div>
  );
};
export default Users;
