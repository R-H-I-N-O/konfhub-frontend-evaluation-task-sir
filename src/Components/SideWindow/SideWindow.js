import { useState } from "react";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import styles from "./SideWindow.module.css"
import { IoClose } from "react-icons/io5";

const SideWindow = ({title, timing, venue, description})=>{
    const [open, setOpen] = useState(false);

    return(
        <div hidden={open} className={styles.main}>
            <div className={styles.container}>
                <div className={styles.closeButton}>
                    <button onClick={!open}><IoClose/></button>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.timing}>
                    {timing}
                </p>
                <div className={styles.venue}>
                    {venue}
                </div>
                <p className={styles.description}>
                    {description}
                </p>
                <h3 className={styles.speaker}>Speakers</h3>
                <SpeakerCard/>
            </div>
        </div>
    );
}