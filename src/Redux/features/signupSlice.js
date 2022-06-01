import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const createemp = createAsyncThunk(
    "empl/createEmpl",
    async ({ values }) => {
      return fetch(`http://localhost:5003/api/employeeAuth/createemployee`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name:values.name,
            email: values.email,
            password: values.password,
           
        }),
      }).then((res) => res.json());
    }
  );

const empSlice = createSlice({
    name:'user',
    initialState:{
        loading:false,
        emp:[],
        error:null
    },
    extraReducers:{
         
        [createemp.pending]: (state, action) => {
            state.loading = true;
          },
          [createemp.fulfilled]: (state, action) => {
            state.loading = false;
            state.emp = [action.payload];
          },
          [createemp.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
    },
})

export default empSlice.reducer
