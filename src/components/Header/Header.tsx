import React, {ChangeEvent, ReactElement} from "react";
import styles from "./Header.module.css"
import userAvatar from "../../img/user-avatar.jpg"
import {faCameraRotate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {updatePhotoProfileTC} from "../../redux/reducers/profileReducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";

export const Header: React.FC<HeaderPropsType> = ({section}): ReactElement | null => {
    const dispatch = useAppDispatch()

    const idAuth = useAppSelector(state => state.auth.id)
    const infoProfile = useAppSelector(state => state.profileData.profile)

    if (section === "sectionLogout" || section === "sectionError") {
        return null
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            dispatch(updatePhotoProfileTC(e.target.files[0]))
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerInner}>
                    <a className={styles.userAvatar} href="#">
                        <img
                            src={infoProfile?.photos.large ? infoProfile.photos.large : userAvatar}/>
                    </a>
                    {(idAuth === infoProfile?.userId) && <div className={styles.editPhoto}>
                        <input type="file" id="inputFile" onChange={onMainPhotoSelected}/>
                        <label htmlFor="inputFile"><FontAwesomeIcon icon={faCameraRotate}
                                                                    size="lg"/> Edit Photo</label>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

// TYPES
type HeaderPropsType = {
    section: string
}