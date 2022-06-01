import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



export const getRoomAll = createAsyncThunk('Room/getRoom',
async()=>{
   const respone = await fetch(`http://localhost:5003/api/roomRoute/fetchroom`);
   const formatedresponse = await respone.json();
   return formatedresponse;
});

export const deleteroom = createAsyncThunk('Rooms/getRoom',
async({id})=>{
    return fetch(`http://localhost:5003/api/roomRoute/deleteroom/${id}`,
    {
        method:'DELETE',
    })
    .then(res => res.json())
});



export const createRooms = createAsyncThunk(
    "Room/createRoom",
    async ({ values }) => {
      return fetch(`http://localhost:5003/api/roomRoute/createroom`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: values.name,
            member: values.member,
            roomnumber:values.roomnumber,
            roomtype: values.roomtype,
            extradisp: values.extradisp,
         
        }),
      }).then((res) => res.json());
    }
  );

const roomSlice = createSlice({
    name:'room',
    initialState:{
        loading:false,
        room:[],
        error:null
    },
    extraReducers:{
       
        [getRoomAll.pending]:(state,action) =>{
          state.loading=true
      },
      [getRoomAll.fulfilled]:(state,action) =>{
          state.loading=false;
          state.room=action.payload;
      },
      [getRoomAll.rejected]:(state,action) =>{
          state.loading=false;
          state.error=action.payload
      },      
        [createRooms.pending]: (state, action) => {
            state.loading = true;
          },
          [createRooms.fulfilled]: (state, action) => {
            state.loading = false;
            state.room = [action.payload];
          },
          [createRooms.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          [deleteroom.pending]: (state, action) => {
            state.loading = true;
          },
          [deleteroom.fulfilled]: (state, action) => {
            state.loading = false;
            state.room = [action.payload];
          },
          [deleteroom.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
    },
})

export default roomSlice.reducer
