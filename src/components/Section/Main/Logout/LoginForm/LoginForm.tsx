import React from "react"
import styles from "./LoginForm.module.css"
import {SubmitHandler, useForm} from "react-hook-form"
import {loginTC} from "../../../../../redux/reducers/authReducer"
import {useAppDispatch} from "../../../../../hooks/useAppDispatch"
import {useAppSelector} from "../../../../../hooks/useAppSelector"

export const LoginForm = () => {
    const dispatch = useAppDispatch()

    const isStopSubmit = useAppSelector(state => state.auth.isStopSubmit)
    const messageStopSubmit = useAppSelector(state => state.auth.messageStopSubmit)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<InputsType>()

    const onSubmit: SubmitHandler<InputsType> = (data): void =>
        dispatch(loginTC(data.email, data.password, data.rememberMe))

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3 className={styles.title}>Login</h3>
                <input
                    className={styles.formInput}
                    placeholder={"Email"}
                    defaultValue=""
                    {...register("email", {
                        required: true,
                        pattern:
                            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    })}
                />
                {errors.email ? (
                    <div className={styles.error}>This field is required</div>
                ) : (
                    <div className={styles.error}></div>
                )}
                <input
                    className={styles.formInput}
                    placeholder={"Password"}
                    type={"password"}
                    defaultValue=""
                    {...register("password", {required: true})}
                />
                {errors.password ? (
                    <div className={styles.error}>This field is required</div>
                ) : (
                    <div className={styles.error}></div>
                )}
                <input
                    className={styles.formCheckbox}
                    type="checkbox"
                    {...register("rememberMe")}
                />
                <span>Remember Me</span>
                {isStopSubmit ? (
                    <div className={styles.stopSubmit}>{messageStopSubmit}</div>
                ) : (
                    <div className={styles.stopSubmit}></div>
                )}
                <button className={styles.formBtn}>Login</button>
            </div>
        </form>
    )
}

// TYPES
type InputsType = {
    email: string
    password: string
    rememberMe: false
}
