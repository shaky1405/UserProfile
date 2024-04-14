import style from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  let userId = useParams();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [company, setCompany] = useState("");
  let [salary, setSalary] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/Employees/${userId.abc}`)
      .then((response) => {
        setName(response.data.empName);
        setCompany(response.data.empCompany);
        setSalary(response.data.empSalary);
      })
      .catch(() => {
        console.log("Errrororrr");
      });
  },[userId]);
  let getName = (e) => {
    setName(e.target.value);
  };
  let getCompany = (e) => {
    setCompany(e.target.value);
  };
  let getSalary = (e) => {
    setSalary(e.target.value);
  };
  let formHandle = (e) => {
    e.preventDefault();
    let payLoad = {
      empName: name,
      empCompany: company,
      empSalary: salary,
    };
    axios
      .put(`http://localhost:5000/Employees/${userId.abc}`, payLoad)
      .then(() => {
        console.log("UPDATED");
      })
      .catch(() => {
        console.log("Errorrr");
      });
    navigate("/users");
  };

  return (
    <div id={style.Euser}>
      <form>
        <h1>Update Details</h1>
        <label>Name</label>
        <input type="text" value={name} onChange={getName} />
        <label>Company</label>
        <input type="text" value={company} onChange={getCompany} />
        <label>Salary</label>
        <input type="text" value={salary} onChange={getSalary} />
        <button onClick={formHandle}>UPDATE</button>
      </form>
    </div>
  );
};
export default EditUser;
