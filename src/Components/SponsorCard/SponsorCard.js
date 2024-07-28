import styles from "./SponsorCard.module.css"

const SponsorCard = ({image, redirect})=>{

    return(
        <a href={redirect}>
            <div className={styles.sposorCardBox}>
            <img className={styles.sposorCardImage} src={image} alt="SponsorImage"/>
        </div>
        </a>
    );
}

export default SponsorCard;