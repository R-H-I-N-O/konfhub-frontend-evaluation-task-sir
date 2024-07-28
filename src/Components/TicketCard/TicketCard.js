import styles from "./TicketCard.module.css"
import { FaLocationDot } from "react-icons/fa6";

const TicketCard = ({title, description, venue, price, type})=>{

    return(
        <div className={styles.cardBox}>
            <div>
                <div>
                    <p className={styles.cardHeading}>
                    {title}
                    </p>
                </div>
                <div className={styles.cardDescription}>
                    <p>
                        {description}
                    </p>
                </div>
                <a href="" className={styles.cardVenue}>
                {venue? <><FaLocationDot /> {venue}</>: ""}
                </a>
                <div className={styles.cardAdditionalVenueDetails}>
                    <p>
                    This is additional venue details.
                    </p>
                </div>
            </div>
            <div className={styles.cardAvailability}>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
            </div>
            <div className={styles.cardBottom}>
                <p className={styles.cardTicketPrice}>
                {price}
                </p>
                <div>
                    <a>
                        <button className={styles.cardButton}>{type}</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TicketCard;