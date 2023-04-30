import React, {ReactElement} from "react"
import {AddPost} from "./AddPost/AddPost"
import {Posts} from "./Posts/Posts"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {useAppSelector} from "../../../../hooks/useAppSelector"

export const Profile = (): ReactElement => {
    const authId = useAppSelector(state => state.auth.id)
    const profileId = useAppSelector(state => state.profileData.profile?.userId)

    if (authId === profileId) {
        return (
            <div>
                <ProfileInfo />
                <AddPost />
                <Posts />
            </div>
        )
    } else {
        return (
            <div>
                <ProfileInfo />
            </div>
        )
    }
}
