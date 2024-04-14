import react from "react"
import style from "./Findcoder.module.css";
import { Link } from "react-router-dom";
const MenuBlock=()=>{
    return(
        <ol id={style.MenuBlock}>
            <li><Link to="/explore">Explore Work</Link></li>
            <li><Link to="/hire">Hire Talent</Link></li>
            <li><Link to="/">dev</Link>Dev Board</li>
            <li><Link to="/challanges"></Link>Challenges</li>
        </ol>
    )
}
export default MenuBlock