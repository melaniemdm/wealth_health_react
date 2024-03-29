import { HashLink as Link } from "react-router-hash-link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/redux";
import { SimpleModal, openModal } from "mdm-simple-modal";

export default function Formulaire() {
  // création de la fonction pour le dispatch dans la liste des nouveaux employés
  const dispatch = useDispatch();
  // state des champs du formulaire
  const [startDate, setStartDate] = useState(new Date());
  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];
  const [selectedState, setSelectedState] = useState(states[0].name);
  async function validEmployee() {
    // recupere les value des input
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const dateBirth = document.querySelector("#dateBirth").value;
    const startDate = document.querySelector("#startDate").value;
    const street = document.querySelector("#street").value;
    const stateCode = selectedState;
    const city = document.querySelector("#city").value;
    const zipCode = document.querySelector("#zipCode").value;
    const department = selectedDepartment;

    // payload de l'action
    const newEmployeeInfo = {
      firstName: firstName,
      lastName: lastName,
      startDate: startDate,
      department: department,
      dateBirth: dateBirth,
      street: street,
      city: city,
      stateCode: stateCode,
      zipCode: zipCode,
    };
    // appel de la function use dispatch avec en paramètre l'action et le nouvel employé
    dispatch(addEmployee(newEmployeeInfo));
  }
  //recupere l'option de department
  function onSelectDepartment(option) {
    const seletedOption = { selected: option };
    setSelectedDepartment(seletedOption.selected.value);
  }
  //recupere l'option de State
  function onSelectState(option) {
    const selecState = { selected: option };
    setSelectedState(selecState.selected.value);
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        {/* lien vers le composant EmployeeList */}
        <Link to="/EmployeeList">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />

          <label htmlFor="dateBirth">Date of Birth</label>
          {/* plugin formulaire de date */}
          <DatePicker
            id="dateBirth"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <label htmlFor="startDate">Start Date</label>
          {/* plugin formulaire de date */}
          <DatePicker
            id="startDate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="stateCode">State</label>
            {/* plugin menu déroulant */}
            <Dropdown
              placeholder="Select an option"
              value={selectedState}
              options={states.map((state) => state.name)}
              onChange={onSelectState}
              name="stateCode"
              id="stateCode"
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          {/* plugin menu déroulant */}
          <Dropdown
            placeholder="Select an option"
            value={selectedDepartment}
            options={departments}
            onChange={onSelectDepartment}
            name="department"
            id="department"
          />
        </form>

        <button
          onClick={() => {
            //declenche la function de l'ouverture de la modal 
            openModal();
            //  declenche la function validEmployee() qui permet de valider et d'enregistrer l'employe
            validEmployee();
          }}
        >
          Save
        </button>

        <form></form>
      </div>
      {/* appel de la library simple modal */}
      <SimpleModal
        text="Employee created !"
        options={{ width: "600px", maskBgColor: "rgba(91, 91, 101, 0.5)" }}
      ></SimpleModal>
    </div>
  );
}
