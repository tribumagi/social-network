import React from 'react';
import styles from "./AddPostForm.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faImage, faMusic, faVideo} from "@fortawesome/free-solid-svg-icons";
import {SubmitHandler, useForm} from "react-hook-form";

type AddPostFormPropsType = {
    callback: (newPostText: string) => void
}
type FormInputs = {
    newPostText: string;
};

export const AddPostForm: React.FC<AddPostFormPropsType> = (props) => {

    const {register, handleSubmit, reset} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.callback(data.newPostText)
        reset()
    };

    return (
        <form className={styles.item} onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register("newPostText", {required: true})} placeholder="write something"/>
            <a href="#"><FontAwesomeIcon className={styles.icon} icon={faMusic} size="lg"/></a>
            <a href="#"><FontAwesomeIcon className={styles.icon} icon={faImage} size="lg"/></a>
            <a href="#"><FontAwesomeIcon className={styles.icon} icon={faVideo} size="lg"/></a>
            <a href="#"><FontAwesomeIcon className={styles.icon} icon={faCamera} size="lg"/></a>
            <button>Publish</button>
        </form>
    );
};