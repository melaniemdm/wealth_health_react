import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "../pages/EmployeeList";
import Formulaire from "../pages/Formulaire";



 
export default function CustomsRoutes(){
    return (
       <Router>

<Routes>
<Route exact path="/Formulaire" element={<Formulaire/>}/>
<Route exact path="/" element={<Formulaire/>}/>
<Route exact path="/EmployeeList"  element={<EmployeeList/>}/>
</Routes>


       </Router>
    )
}