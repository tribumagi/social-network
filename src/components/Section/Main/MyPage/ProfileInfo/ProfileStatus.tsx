import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react"
import styles from "./ProfileStatus.module.css"
import {
    getStatusProfileTC,
    updateStatusProfileTC,
} from "../../../../../redux/reducers/profileReducer"
import {useParams} from "react-router-dom"
import {useAppDispatch} from "../../../../../hooks/useAppDispatch"
import {useAppSelector} from "../../../../../hooks/useAppSelector"

export const ProfileStatus = () => {
    const dispatch = useAppDispatch()

    const idAuth = useAppSelector(state => state.auth.id)
    const profileId = useAppSelector(state => state.profileData.profile?.userId)
    const status = useAppSelector(state => state.profileData.status)

    const [localStatus, setLocalStatus] = useState<string>(status)
    const [edit, setEdit] = useState(false)

    let params = useParams<"*">()
    let id: number = Number(params["*"])
    if (params["*"] === "") {
        id = idAuth
    }

    useEffect(() => {
        dispatch(getStatusProfileTC(id))
    }, [dispatch, id])

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
        setLocalStatus(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            updateStatus()
        }
    }

    const onBlurStatusHandler = (): void => {
        updateStatus()
    }

    const updateStatus = (): void => {
        if (localStatus === "") {
            dispatch(updateStatusProfileTC("set status"))
            setEdit(!edit)
        } else {
            dispatch(updateStatusProfileTC(localStatus))
            setEdit(!edit)
        }
    }

    const onClickHandler = (): void => {
        if (idAuth === profileId) {
            dispatch(getStatusProfileTC(id))
            setEdit(!edit)
        }
    }

    return (
        <div className={styles.profileStatus}>
            {edit ? (
                <input
                    placeholder={"set status"}
                    value={localStatus}
                    onBlur={onBlurStatusHandler}
                    onChange={onChangeStatus}
                    onKeyPress={onKeyPressHandler}
                    autoFocus
                />
            ) : (
                <span onClick={onClickHandler}>
                    {status.length > 15 ? `${status.slice(0, 15)}...` : status}
                </span>
            )}
        </div>
    )
}
