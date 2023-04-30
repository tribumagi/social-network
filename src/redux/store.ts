import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import {profileReducer} from "./reducers/profileReducer"
import {messagesReducer} from "./reducers/messagesReducer"
import {groupsReducer} from "./reducers/groupsReducer"
import {friendsReducer} from "./reducers/friendsReducer"
import {authReducer} from "./reducers/authReducer"

const rootReducer = combineReducers({
    profileData: profileReducer,
    messagesData: messagesReducer,
    groupsData: groupsReducer,
    friendsData: friendsReducer,
    auth: authReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
