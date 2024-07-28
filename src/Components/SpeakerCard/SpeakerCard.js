import { FaFacebook, FaXTwitter, FaLinkedin, FaGlobe } from "react-icons/fa6";
import styles from "./SpeakerCrad.module.css";
import { useAppContext } from "../../Contexts/AppContext";

const SpeakerCard = ({
  speakerImage,
  speakerName,
  speakerDesignation,
  speakerOrg,
}) => {
  const data = useAppContext();

  return (
    <div className={styles.speakercardContainer}>
      <div className={styles.speakerImage}>
        <img src={speakerImage} />
      </div>
      <div className={styles.speakerContent}>
        <div>
          <p className={styles.SpeakerHeading}>{speakerName}</p>
          <p>{speakerDesignation}</p>
          <p>{speakerOrg}</p>
        </div>
        <div className={styles.speakerSocialLink}>
          <a href={data.organizer_twitter_url}>
            <FaFacebook />
          </a>
          <a href={data.organizer_linkedin_url}>
            <FaXTwitter />
          </a>
          <a href={data.organizer_facebook_url}>
            <FaLinkedin />
          </a>
          <a href={data.organiser_website}>
            <FaGlobe />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
