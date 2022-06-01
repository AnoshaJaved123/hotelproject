import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



export const getGuestAll = createAsyncThunk('Guest/getguests',
async()=>{
   const respone = await fetch(`http://localhost:5003/api/guestRoute/fetchguest`);
   const formatedresponse = await respone.json();
   return formatedresponse;
});



export const deleteguest = createAsyncThunk('Guests/getPosts',
async({id})=>{
    return fetch(`http://localhost:5003/api/guestRoute/deleteguest/${id}`,
    {
        method:'DELETE',
    })
    .then(res => res.json())
});


export const createGuests = createAsyncThunk(
    "Guest/createGuest",
    async ({ values }) => {
      return fetch(`http://localhost:5003/api/guestRoute/createguest`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            cnic: values.cnic,
            status: values.status,
            room: values.room,
         
        }),
      }).then((res) => res.json());
    }
  );

const guestSlice = createSlice({
    name:'guest',
    initialState:{
        loading:false,
        guest:[],
        error:null
    },
    extraReducers:{
       
        [getGuestAll.pending]:(state,action) =>{
          state.loading=true
      },
      [getGuestAll.fulfilled]:(state,action) =>{
          state.loading=false;
          state.guest=action.payload;
      },
      [getGuestAll.rejected]:(state,action) =>{
          state.loading=false;
          state.error=action.payload
      },      
        [createGuests.pending]: (state, action) => {
            state.loading = true;
          },
          [createGuests.fulfilled]: (state, action) => {
            state.loading = false;
            state.guest = [action.payload];
          },
          [createGuests.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          [deleteguest.pending]: (state, action) => {
            state.loading = true;
          },
          [deleteguest.fulfilled]: (state, action) => {
            state.loading = false;
            state.guest = [action.payload];
          },
          [deleteguest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
    },
})

export default guestSlice.reducer
