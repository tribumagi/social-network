import React, {ReactElement} from "react"
import {addMessageAC} from "../../../../../redux/reducers/messagesReducer"
import styles from "./AddMessage.module.css"
import {AddMessageForm} from "./AddMessageForm/AddMessageForm"
import {useAppDispatch} from "../../../../../hooks/useAppDispatch"

export const AddMessage = (): ReactElement => {
    const dispatch = useAppDispatch()

    const addNewMessage = (newMessage: string): void => {
        dispatch(addMessageAC(newMessage))
    }

    return (
        <div className={styles.addMessage}>
            <AddMessageForm callback={newMessage => addNewMessage(newMessage)} />
        </div>
    )
}
