import React, {ReactElement} from "react"
import styles from "./Logout.module.css"
import {Navigate} from "react-router-dom"
import {SectionCSSType} from "../../../../App"
import logo from "../../../../img/other/dizzi.png"
import {LoginForm} from "./LoginForm/LoginForm"
import {useAppSelector} from "../../../../hooks/useAppSelector"

export const Logout: React.FC<LogoutPropsType> = ({changeGrid}): ReactElement => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (isAuth) {
        changeGrid("sectionAll")
        return <Navigate to="/profile" />
    }

    return (
        <div className={styles.logout}>
            <div className={styles.left}>
                <h2>Hello!</h2>
                <img src={logo} alt="Dizzi_by" />
                <p>Welcome to my social network!</p>
                <p>Test account</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
            <div className={styles.right}>
                <LoginForm />
            </div>
        </div>
    )
}

// TYPES
type LogoutPropsType = {
    changeGrid: (value: SectionCSSType) => void
}
