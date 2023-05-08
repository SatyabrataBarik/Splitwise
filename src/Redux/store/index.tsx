import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { isDarkModeSlice } from '../BackGroundContentSlice'
const rootReducer=combineReducers({
    DarkTheme:isDarkModeSlice.reducer,

})
const store=configureStore({
    reducer:{
    rootReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store

