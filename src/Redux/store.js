import { configureStore } from "@reduxjs/toolkit";
import guestSlice from "./features/guestSlice";
import roomSlice from "./features/roomSlice";
import housekeepingSlice from "./features/housekeepingSlice";

export const store = configureStore({
    reducer:{
        app:guestSlice,
        appTwo:roomSlice,
        appThree:housekeepingSlice,
        // applogin:loginSlice,
        // appsignup:empSlice,
    },
})