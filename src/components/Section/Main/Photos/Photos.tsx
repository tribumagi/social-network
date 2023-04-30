import React from "react"
import styles from "./Photos.module.css"
import photo1 from "../../../../img/Images/photo1.jpg"
import photo2 from "../../../../img/Images/photo2.jpg"
import photo3 from "../../../../img/Images/photo3.jpg"
import photo4 from "../../../../img/Images/photo4.jpg"
import photo5 from "../../../../img/Images/photo5.jpg"
import photo6 from "../../../../img/Images/photo6.jpg"
import photo7 from "../../../../img/Images/photo7.jpg"
import photo8 from "../../../../img/Images/photo8.jpg"
import photo9 from "../../../../img/Images/photo9.jpg"
import photo10 from "../../../../img/Images/photo10.jpg"
import photo11 from "../../../../img/Images/photo11.jpg"
import photo12 from "../../../../img/Images/photo12.jpg"
import {ShowMore} from "../../../UIKit/ShowMore"

const Photos = () => {
    return (
        <div className={styles.photos}>
            <div className={styles.photosInner}>
                <img src={photo1} alt="photo1" />
                <img src={photo2} alt="photo2" />
                <img src={photo3} alt="photo3" />
                <img src={photo4} alt="photo4" />
                <img src={photo5} alt="photo5" />
                <img src={photo6} alt="photo6" />
                <img src={photo7} alt="photo7" />
                <img src={photo8} alt="photo8" />
                <img src={photo9} alt="photo9" />
                <img src={photo10} alt="photo10" />
                <img src={photo11} alt="photo11" />
                <img src={photo12} alt="photo12" />
            </div>
            <ShowMore callback={() => {}} />
        </div>
    )
}

export default Photos
