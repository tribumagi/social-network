import React, {ReactElement} from "react"
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar0.png"
import {addPostAC} from "../../../../../redux/reducers/profileReducer"
import {AddPostForm} from "./AddPostForm/AddPostForm"
import {useAppSelector} from "../../../../../hooks/useAppSelector"
import {useAppDispatch} from "../../../../../hooks/useAppDispatch"

export const AddPost = (): ReactElement => {
    const dispatch = useAppDispatch()

    const profileUserAvatar = useAppSelector(
        state => state.profileData.profile?.photos.large,
    )

    const addNewPost = (newPostText: string): void => {
        dispatch(addPostAC(newPostText))
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={profileUserAvatar ? profileUserAvatar : userAvatar} alt="" />
            </div>
            <AddPostForm
                callback={newPostText => {
                    addNewPost(newPostText)
                }}
            />
        </div>
    )
}
