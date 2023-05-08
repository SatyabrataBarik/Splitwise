import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isDarkMode:false
}
export const isDarkModeSlice=createSlice({
    name:'DarkTheme',
    initialState,
    reducers:{
    cheakBackground:(state,actions)=>{
          state.isDarkMode=actions.payload
    }
    }
})
export const  {cheakBackground}=isDarkModeSlice.actions
export default isDarkModeSlice.reducer
