// import Findcoder from "./component/Findcoder" 
// import Explore from "./component/Explore"
// import Hire from "./component/Hire"
// import Dev from "./component/Dev"
// import Challenges from "./component/Challenges"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./CRUD/Home"
import { BrowserRouter,Routes,Route} from "react-router-dom"

import Createuser from "./CRUD/Createuser"
import Users from "./CRUD/Users"
import EditUser from "./CRUD/EditUser"
const App = () => {
    return (

        <div>
            {/* <BrowserRouter>
            <Findcoder/>
            <Routes>
            <Route element={<Explore/>} path="/explore"/>
            <Route element={<Hire/>} path="/hire"/>
            <Route element={<Dev/>} path="/dev"/>
            <Route element={<Challenges/>} path="/challenges"/>
            </Routes> 

            </BrowserRouter> */}
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<Createuser/>} path="/"/>
                <Route element={<Users/>} path="/users"/>
                <Route element={<EditUser/>} path="/edit/:abc"/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default App