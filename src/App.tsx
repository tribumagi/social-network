import React, {ReactElement, useEffect} from "react"
import "./App.css"
import {Header} from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"
import {Nav} from "./components/Section/Nav/Nav"
import {Main} from "./components/Section/Main/Main"
import {Contacts} from "./components/Section/Contacts/Contacts"
import {Logout} from "./components/Section/Main/Logout/Logout"
import {getAuthUserDataTC} from "./redux/reducers/authReducer"
import {useLocalStateSection} from "./hooks/useLocalStateSection"
import {useAppDispatch} from "./hooks/useAppDispatch"

export const App = (): ReactElement => {
    const dispatch = useAppDispatch()

    const [section, setSection] = useLocalStateSection("section", "sectionAll")

    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [dispatch])

    const changeGrid = (value: SectionCSSType): void => {
        setSection(value)
    }

    return (
        <div className="App">
            <Header section={section} />
            <div className={section}>
                <Nav section={section} changeGrid={changeGrid} />
                <Main section={section} changeGrid={changeGrid} />
                {section === "sectionAll" && <Contacts />}
            </div>
            <Footer section={section} />
            {section === "sectionLogout" && <Logout changeGrid={changeGrid} />}
        </div>
    )
}

// TYPES
export type SectionCSSType =
    | "sectionAll"
    | "sectionMessages"
    | "sectionLogout"
    | "sectionError"
