import React, {ReactElement} from "react"
import styles from "./Post.module.css"
import userAvatar from "../../../../../../img/user-avatar0.png"
import {
    faComment,
    faEye,
    faHeart,
    faHeartCrack,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {clickLikeAC, deletePostAC} from "../../../../../../redux/reducers/profileReducer"
import {useAppDispatch} from "../../../../../../hooks/useAppDispatch"
import {useAppSelector} from "../../../../../../hooks/useAppSelector"

type PostPropsType = {
    id: string
    name: string
    date: string
    text: string | undefined
    views: number
    comments: number
    like: number
    dislike: number
    isLike: boolean
    isDislike: boolean
}

export const Post = (props: PostPropsType): ReactElement => {
    const dispatch = useAppDispatch()

    const profileUserAvatar = useAppSelector(
        state => state.profileData.profile?.photos.large,
    )

    const onClickButtonHandler = (id: string): void => {
        dispatch(deletePostAC(id))
    }

    const onClickLike = (): void => {
        if (!props.isLike) {
            dispatch(clickLikeAC(props.id, "like"))
        }
    }

    const onClickDisLike = (): void => {
        if (!props.isDislike) {
            dispatch(clickLikeAC(props.id, "disLike"))
        }
    }

    const likeClass = props.isLike ? `${styles.iconClick}` : `${styles.icon}`
    const disLikeClass = props.isDislike ? `${styles.iconClick}` : `${styles.icon}`

    return (
        <div className={styles.post}>
            <div className={styles.title}>
                <div className={styles.avatar}>
                    <img
                        src={profileUserAvatar ? profileUserAvatar : userAvatar}
                        alt="logo"
                    />
                </div>
                <div className={styles.info}>
                    <div>
                        <div className={styles.name}>{props.name}</div>
                        <div className={styles.date}>Published: {props.date}</div>
                    </div>
                    <div>
                        <button onClick={() => onClickButtonHandler(props.id)}>
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                {props.text}
                <div className={styles.icons}>
                    <span>
                        <FontAwesomeIcon className={styles.icon} icon={faEye} size="lg" />
                        {props.views}
                    </span>
                    <span>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faComment}
                            size="lg"
                        />{" "}
                        {props.comments}
                    </span>
                    <span onClick={onClickLike}>
                        <FontAwesomeIcon className={likeClass} icon={faHeart} size="lg" />{" "}
                        {props.like}
                    </span>
                    <span onClick={onClickDisLike}>
                        <FontAwesomeIcon
                            className={disLikeClass}
                            icon={faHeartCrack}
                            size="lg"
                        />{" "}
                        {props.dislike}
                    </span>
                </div>
            </div>
        </div>
    )
}
