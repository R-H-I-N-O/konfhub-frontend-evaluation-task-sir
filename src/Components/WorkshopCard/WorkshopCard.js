import styles from "./WorkshopCard.module.css";
import { FaRegCalendar } from "react-icons/fa6";

const WorkshopCard = ({ title, timing, image, poster }) => {
  return (
    <div className={styles.workshopCardContainer}>
      <div className={styles.workshopCardPoster}>
        <img src={poster} alt="posterImage" />
      </div>
      <div>
        <div className={styles.workshopCardTitle}>{title}</div>
        <div className={styles.workshopCardTiming}>
          <FaRegCalendar /> &nbsp;{timing} (IST)
        </div>
        <div className={styles.workshopCardFooter}>
          <div className={styles.workshopCardProfilePic}>
            {Array.isArray(image) ? (
              image.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className={index > 0 ? styles.marginLeftNegative : ""}
                  alt="ProPic"
                />
              ))
            ) : (
              <img src={image} alt="ProPic" />
            )}
          </div>
          <button className={styles.workshopCardButton}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
