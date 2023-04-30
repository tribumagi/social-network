import React from "react"
import styles from "./Message.module.css"
import userAvatar from "../../../../../../img/user-avatar0.png"
import {useAppSelector} from "../../../../../../hooks/useAppSelector"

export const Message: React.FC<MessagePropsType> = props => {
    const profileUserAvatar = useAppSelector(
        state => state.profileData.profile?.photos.large,
    )

    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img
                    src={profileUserAvatar ? profileUserAvatar : userAvatar}
                    alt="logo"
                />
            </div>
            <div className={styles.text}>{props.text}</div>
        </div>
    )
}

// TYPES
type MessagePropsType = {
    text: string
}
