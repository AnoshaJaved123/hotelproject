import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



export const gethkAll = createAsyncThunk('hk/gethk',
async()=>{
   const respone = await fetch(`http://localhost:5003/api/hkRoute/fetchhk`);
   const formatedresponse = await respone.json();
   return formatedresponse;
});

export const deletehk = createAsyncThunk('Rooms/getRoom',
async({id})=>{
    return fetch(`http://localhost:5003/api/hkRoute/deletehk/${id}`,
    {
        method:'DELETE',
    })
    .then(res => res.json())
});



export const createhk = createAsyncThunk(
    "housekeeping/createHouseKeeping",
    async ({ values }) => {
      return fetch(`http://localhost:5003/api/hkRoute/createhk`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: values.name,
            status: values.status,
            room:values.room,
         
        }),
      }).then((res) => res.json());
    }
  );

const housekeepingSlice = createSlice({
    name:'housekeeping',
    initialState:{
        loading:false,
        housekeeping:[],
        error:null
    },
    extraReducers:{
       
        [gethkAll.pending]:(state,action) =>{
          state.loading=true
      },
      [gethkAll.fulfilled]:(state,action) =>{
          state.loading=false;
          state.housekeeping=action.payload;
      },
      [gethkAll.rejected]:(state,action) =>{
          state.loading=false;
          state.error=action.payload
      },      
        [createhk.pending]: (state, action) => {
            state.loading = true;
          },
          [createhk.fulfilled]: (state, action) => {
            state.loading = false;
            state.housekeeping = [action.payload];
          },
          [createhk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          [deletehk.pending]: (state, action) => {
            state.loading = true;
          },
          [deletehk.fulfilled]: (state, action) => {
            state.loading = false;
            state.housekeeping = [action.payload];
          },
          [deletehk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
    },
})

export default housekeepingSlice.reducer
