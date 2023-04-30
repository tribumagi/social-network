import {v1} from "uuid"
import {
    ADD_POST,
    CLICK_LIKE,
    DELETE_POST,
    SET_PHOTO,
    SET_PROFILE,
    SET_PROFILE_INFO,
    SET_STATUS,
    ThunkActionType,
    ThunkDispatchType,
} from "../types"
import {profileAPI, updateProfileInfoRequestType} from "../../api/api"

const initialState: PostDataType = {
    posts: [
        {
            id: v1(),
            name: "Sonya Blade",
            date: "02.03.2022, 17:02:02",
            text: "World's most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            views: 125,
            comments: 10,
            like: 14,
            dislike: 3,
            isLike: false,
            isDislike: false,
        },
        {
            id: v1(),
            name: "Sonya Blade",
            date: "02.03.2022, 17:02:02",
            text: "Curabitur world's most beautiful car in #test drive booking! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            views: 145,
            comments: 445,
            like: 45,
            dislike: 2,
            isLike: false,
            isDislike: false,
        },
        {
            id: v1(),
            name: "Sonya Blade",
            date: "02.03.2022, 17:02:02",
            text: "Lonely Cat Enjoying in Summer Curabitur #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc",
            views: 45,
            comments: 1,
            like: 556,
            dislike: 14,
            isLike: false,
            isDislike: false,
        },
    ],
    profile: null,
    status: "set status",
}

export const profileReducer = (
    state = initialState,
    action: PostsActionType,
): PostDataType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        name: state.profile?.fullName || "No Name",
                        date: new Date().toLocaleString(),
                        text: action.newPostText,
                        views: 0,
                        comments: 0,
                        like: 0,
                        dislike: 0,
                        isLike: false,
                        isDislike: false,
                    },
                    ...state.posts,
                ],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.id),
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case CLICK_LIKE:
            if (action.name === "like") {
                return {
                    ...state,
                    posts: state.posts.map(el =>
                        el.id === action.id
                            ? {
                                  ...el,
                                  like: el.like + 1,
                                  dislike: el.isDislike ? el.dislike - 1 : el.dislike,
                                  isLike: true,
                                  isDislike: false,
                              }
                            : el,
                    ),
                }
            } else {
                return {
                    ...state,
                    posts: state.posts.map(el =>
                        el.id === action.id
                            ? {
                                  ...el,
                                  like: el.isLike ? el.like - 1 : el.like,
                                  dislike: el.dislike + 1,
                                  isLike: false,
                                  isDislike: true,
                              }
                            : el,
                    ),
                }
            }
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_PHOTO:
            if (state.profile !== null) {
                return {...state, profile: {...state.profile, photos: action.photos}}
            }
            return state
        case SET_PROFILE_INFO:
            if (state.profile !== null) {
                return {...state, profile: {...state.profile, ...action.info}}
            }
            return state
        default:
            return state
    }
}

// ActionCreator
export const addPostAC = (newPostText: string) =>
    ({
        type: ADD_POST,
        newPostText,
    } as const)

export const deletePostAC = (id: string) =>
    ({
        type: DELETE_POST,
        id,
    } as const)

export const setProfileAC = (profile: ProfileType) =>
    ({
        type: SET_PROFILE,
        profile,
    } as const)

export const clickLikeAC = (id: string, name: string) =>
    ({
        type: CLICK_LIKE,
        id,
        name,
    } as const)

export const setStatusAC = (status: string) =>
    ({
        type: SET_STATUS,
        status,
    } as const)

export const setPhotoAC = (photos: PhotosProfileType) =>
    ({
        type: SET_PHOTO,
        photos,
    } as const)

export const setProfileInfoAC = (info: updateProfileInfoRequestType) =>
    ({
        type: SET_PROFILE_INFO,
        info,
    } as const)

//Thunk Creator
export const getUserProfileTC =
    (id: number): ThunkActionType =>
    async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.getUserProfile(id)
        dispatch(setProfileAC(response.data))
    }

export const getStatusProfileTC =
    (id: number): ThunkActionType =>
    async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.getStatusProfile(id)
        let status
        if (response.data) {
            status = response.data
        } else {
            status = "No status"
        }
        dispatch(setStatusAC(status))
    }

export const updateStatusProfileTC =
    (status: string): ThunkActionType =>
    async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.updateStatusProfile(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    }

export const updatePhotoProfileTC =
    (photo: any): ThunkActionType =>
    async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.updatePhotoProfile(photo)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoAC(response.data.data))
        }
    }

export const updateProfileInfoTC =
    (info: updateProfileInfoRequestType): ThunkActionType =>
    async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.updateProfileInfo(info)
        if (response.data.resultCode === 0) {
            dispatch(setProfileInfoAC(info))
        }
    }

// Types
export type PostType = {
    id: string
    name: string
    date: string
    text: string
    views: number
    comments: number
    like: number
    dislike: number
    isLike: boolean
    isDislike: boolean
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
    photos: PhotosProfileType
}

export type ContactsProfileType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotosProfileType = {
    small: string
    large: string
}

export type PostDataType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

export type PostsActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setProfileAC>
    | ReturnType<typeof clickLikeAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setPhotoAC>
    | ReturnType<typeof setProfileInfoAC>
