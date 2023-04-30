import {SET_USER_DATA, STOP_SUBMIT, ThunkActionType, ThunkDispatchType} from "../types"
import {authAPI} from "../../api/api"

const initialState: AuthType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
    isStopSubmit: false,
    messageStopSubmit: "",
}

export const authReducer = (state = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case STOP_SUBMIT:
            return {
                ...state,
                isStopSubmit: action.payload.isStopSubmit,
                messageStopSubmit: action.payload.messageStopSubmit,
            }
        default:
            return state
    }
}

// ActionCreator
export const setAuthUserDataAC = (
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
) =>
    ({
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth,
        },
    } as const)

export const stopSubmitAC = (isStopSubmit: boolean, messageStopSubmit: string) =>
    ({
        type: STOP_SUBMIT,
        payload: {
            isStopSubmit,
            messageStopSubmit,
        },
    } as const)

//Thunk Creator
export const getAuthUserDataTC =
    (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
        const response = await authAPI.authMe()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    }

export const loginTC =
    (email: string, password: string, rememberMe: boolean): ThunkActionType =>
    async (dispatch: ThunkDispatchType) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
            dispatch(stopSubmitAC(false, ""))
        } else {
            dispatch(stopSubmitAC(true, response.data.messages[0]))
        }
    }

export const logoutTC = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(0, "", "", false))
    }
}

// Types
export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
    isStopSubmit: boolean
    messageStopSubmit: string
}

export type AuthActionType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof stopSubmitAC>
