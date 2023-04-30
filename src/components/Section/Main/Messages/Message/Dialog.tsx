import React, {ReactElement} from "react"
import styles from "./Dialog.module.css"
import {Message} from "./Message/Message"
import friendAvatar from "../../../../../img/Contacts/friend-avatar0.jpg"
import {useAppSelector} from "../../../../../hooks/useAppSelector"

export const Dialog = (): ReactElement => {
    const messages = useAppSelector(state => state.messagesData.messages)

    const messageElement = messages.map(message => (
        <div key={message.id}>
            <Message text={message.message} />
        </div>
    ))

    return (
        <div className={styles.dialog}>
            <div className={styles.contact}>
                <div className={styles.avatar}>
                    <img src={friendAvatar} alt={"Jason Bourne"} />
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.name}>Jason Bourne</div>
                    <div className={styles.online}>Online</div>
                </div>
            </div>
            <div className={styles.messages}>{messageElement}</div>
        </div>
    )
}
