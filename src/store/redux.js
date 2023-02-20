import {createSlice, configureStore} from "@reduxjs/toolkit";

//parametre du slice
const employeeParameters ={
    name: "allEmployees",
    initialState:[],
    reducers:{
addEmployee:(state, action)=>{
    state.push({firstName : action.payload.firstName,
    lastName : action.payload.lastName,
    startDate : action.payload.startDate,
    department :action.payload.department,
    dateBirth : action.payload.dateBirth,
    street : action.payload.street,
    city :action.payload.city,
    stateCode :action.payload.stateCode,
    zipCode : action.payload.zipCode,})

    return state
}
},
}

//partie du store
const employeeSlice = createSlice(employeeParameters);
export const {addEmployee} = employeeSlice.actions;

// création du store 
export const store = configureStore({
    reducer: {
        allEmployees: employeeSlice.reducer,
  
    },
  });