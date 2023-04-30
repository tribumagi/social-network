import React from "react";
import styles from "./Group.module.css";
import group1 from "../../../../../img/Groups/group1.jpg"
import {Button} from "../../../../UIKit/Button";
import {useDispatch} from "react-redux";
import {leaveGroupAC} from "../../../../../redux/reducers/groupsReducer";

type GroupPropsType = {
    id: string
    name: string
    follow: number
    type: string
    logo: string
}

const Group = (props: GroupPropsType) => {

    const dispatch = useDispatch()

    const leaveGroup = () => {
        dispatch(leaveGroupAC(props.id))
    }

    return (
        <div className={styles.group}>
            <div className={styles.info}>
                <a href="#"><img src={group1} alt={props.logo}/></a>
                <div>
                    <a>{props.name}</a>
                    <p>{props.type} Group</p>
                </div>
            </div>
            <div>
                {props.follow}k Members
            </div>
            <div className={styles.btn}>
                <Button name={"Leave Group"} callback={leaveGroup}/>
            </div>
        </div>
    )
}

export default Group;