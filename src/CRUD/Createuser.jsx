
import style from "./Home.module.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Createuser=()=>{

    let[name, setName]=useState("")
    let[company, setCompany]=useState("")
    let[salary, setSalary]=useState("")

    let navigate = useNavigate()

    let getName=(e)=>{
        setName(e.target.value)
    }
    let getCompany=(e)=>{
        setCompany(e.target.value)
    }
    let getSalary=(e)=>{
        setSalary(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()

        let payLoad = {
            empName: name,
            empCompany: company,
            empSalary: salary
        }
        axios.post("http://localhost:5000/Employees",payLoad)
        .then(()=>{console.log("DATA HAS BEEN STORED");})
        .catch(()=>{console.log("Errroorrrrr");})

        navigate("/users")
    }


    return(
        <div id={style.myForm}>
            
            <form>
            <h1>Enter Details</h1>
            <label>Name</label>
            <input type="text" value={name} onChange={getName}/>
            <label>Company</label>
            <input type="text" value={company} onChange={getCompany} />
            <label>Salary</label>
            <input type="text" value={salary} onChange={getSalary} />
            <button onClick={formHandle}>SUBMIT</button>
            </form>
        </div>
    )
}
export default Createuser