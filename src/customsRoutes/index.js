import { Provider } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "../pages/EmployeeList";
import Formulaire from "../pages/Formulaire";
import { store } from "../store/redux";



 
export default function CustomsRoutes(){
    return (
       <Router>
        <Provider store={store}>

<Routes>
<Route exact path="/Formulaire" element={<Formulaire/>}/>
<Route exact path="/" element={<Formulaire/>}/>
<Route exact path="/EmployeeList"  element={<EmployeeList/>}/>
</Routes>

</Provider>
       </Router>
    )
}