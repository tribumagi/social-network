import React, {ReactElement} from "react"
import {NavLink} from "react-router-dom"
import styles from "./Nav.module.css"
import {
    faPager,
    faMessage,
    faPerson,
    faPeopleGroup,
    faImage,
    faVideo,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {SectionCSSType} from "../../../App"
import {logoutTC} from "../../../redux/reducers/authReducer"
import {useAppDispatch} from "../../../hooks/useAppDispatch"

export const Nav = ({section, changeGrid}: NavPropsType): ReactElement | null => {
    const dispatch = useAppDispatch()

    if (section === "sectionLogout" || section === "sectionError") {
        return null
    }

    const onClickHandlerLogout = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={styles.nav}>
            <p className={styles.title}>Shortcuts</p>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPager} size="lg" pull="left" />
                <NavLink to="profile" onClick={() => changeGrid("sectionAll")}>
                    My Page
                </NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faMessage} size="lg" pull="left" />
                <NavLink to="messages" onClick={() => changeGrid("sectionMessages")}>
                    Messages
                </NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPerson} size="lg" pull="left" />
                <NavLink to="friends/my" onClick={() => changeGrid("sectionAll")}>
                    Friends
                </NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPeopleGroup} size="lg" pull="left" />
                <NavLink to="groups" onClick={() => changeGrid("sectionAll")}>
                    Groups
                </NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faImage} size="lg" pull="left" />
                <NavLink to="photos" onClick={() => changeGrid("sectionAll")}>
                    Photos
                </NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faVideo} size="lg" pull="left" />
                <NavLink to="videos" onClick={() => changeGrid("sectionAll")}>
                    Videos
                </NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" pull="left" />
                <NavLink to="logout" onClick={onClickHandlerLogout}>
                    Logout
                </NavLink>
            </div>
        </div>
    )
}

// TYPES
type NavPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}
