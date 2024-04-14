import style from"./Home.module.css"
import React from "react"

import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <div id={style.nav}> 
        <Link to="/">Create-User</Link>
        <Link to="/users">Users</Link>
        </div>
    )
}
export default Home