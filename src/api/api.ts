import axios from "axios"
import {
    ContactsProfileType,
    PhotosProfileType,
    ProfileType,
} from "../redux/reducers/profileReducer"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "ce3c070f-a909-423d-8134-d1162e5ce541",
    },
})

export const friendsAPI = {
    getUsers(currentPageFoundFriends: number, pageSize: number) {
        return instance
            .get<GetUserResponseType>(
                `users?page=${currentPageFoundFriends}&count=${pageSize}`,
            )
            .then(response => response.data)
    },
    followingUser(id: string) {
        return instance.post<ResponseType>(`follow/${id}`)
    },
    unfollowingUser(id: string) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
}

export const profileAPI = {
    getUserProfile(id: number) {
        return instance.get<ProfileType>(`profile/${id}`)
    },
    getStatusProfile(id: number) {
        return instance.get<any>(`profile/status/${id}`)
    },
    updateStatusProfile(statusText: string) {
        return instance.put<ResponseType>("profile/status", {status: statusText})
    },
    updatePhotoProfile(photo: any) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put<ResponseType<PhotosProfileType>>("profile/photo", formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        })
    },
    updateProfileInfo(info: updateProfileInfoRequestType) {
        return instance.put<ResponseType>("profile", {info})
    },
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<{id: number; email: string; login: string}>>(
            `auth/me`,
        )
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    },
}

// TYPES

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}

type GetUserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export type updateProfileInfoRequestType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
}
