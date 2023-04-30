import React, {ChangeEvent, ReactElement, useState} from "react";
import {Contact} from "./Contact/Contact";
import styles from "./Contacts.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {FriendsType} from "../../../redux/reducers/friendsReducer";

export const Contacts = (): ReactElement => {
    const friendsData = useSelector<RootState, Array<FriendsType>>(state => state.friendsData.friends)

    let friendsDataFilter = friendsData.filter(el => el.followed);

    let regExp = new RegExp("", "gi")
    const [filter, setFilter] = useState(regExp)
    const onChangeHandlerFilter = (e: ChangeEvent<HTMLInputElement>): void => {
        let regExp = new RegExp(`${e.currentTarget.value}`, "gi")
        setFilter(regExp)
    }

    const contactElementFilterSearch = friendsDataFilter.filter(el => filter.test(el.name))

    const contactElement = contactElementFilterSearch.map(contact => <Contact key={contact.id} id={contact.id}
                                                                              name={contact.name}
                                                                              email={contact.email}
                                                                              photos={contact.photos}/>)

    return (
        <div className={styles.contacts}>
            <div className={styles.title}>
                Friends
            </div>
            <div>
                <input className={styles.search} type="search" placeholder="  Search Contacts..."
                       onChange={onChangeHandlerFilter}/>
            </div>
            <div className={styles.contactElement}>
                {contactElement}
            </div>
        </div>
    )
}