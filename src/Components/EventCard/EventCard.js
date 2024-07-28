import React, { useState, useEffect } from "react";
import style from "./EventCard.module.css";
import moment from "moment-timezone";
import {
  FaTicket,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaGlobe,
  FaPhone,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useAppContext } from "../../Contexts/AppContext";

function EventCard() {
  const [timeLeft, setTimeLeft] = useState({});
  const data = useAppContext();

  const targetDate = moment
    .tz(
      `${data.end_date} ${data.end_time}`,
      "YYYY-MM-DD HH:mm:ss",
      data.time_zone
    )
    .toDate();

  const calculateTimeLeft = () => {
    const now = moment.tz(data.time_zone).toDate();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.subContainer}>
        <div className={style.mainBox}>
          <div className={style.eventCard}>
            <h2 className={style.CardHead}>KonfHub Frontend Evaluation Task</h2>

            <div className={style.icons}>
              <div className={style.iconBox}>
                <FaVideo /> <p>Online</p>
              </div>

              <div className={style.iconBox}>
                <FaTicket />
                <p> Paid </p>
              </div>
            </div>

            <div className={style.event}>
              <p>
                <strong>Event Live Link :</strong>{" "}
                <a href="https://dev.konfhub.com/konfhub-frontend-evaluation-task/">
                  Open streaming website
                </a>{" "}
              </p>
            </div>

            <div className={style.date}>
              <p>
                <strong>Date:</strong> Jul 31st, 2034 6:00 AM - Aug 31st, 2034
                6:00 PM IST
              </p>
            </div>

            <div className={style.countdown}>
              <p className={style.eventHead}>EVENT STARTS IN</p>
              <div>
                {timeLeft.days !== undefined ? (
                  <div>
                    <span className={style.timer}>{timeLeft.days}D : </span>
                    <span className={style.timer}>{timeLeft.hours}H : </span>
                    <span className={style.timer}>{timeLeft.minutes}M : </span>
                    <span className={style.timer}>{timeLeft.seconds}S</span>
                  </div>
                ) : (
                  <div>Time's up!</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.button1}>
          <button>Buy Now</button>
        </div>

        <div className={style.button2}>
          <button
            onclick={window.open(
              "https://dev.konfhub.com/konfhub-frontend-evaluation-task"
            )}
          >
            Official Website <HiOutlineExternalLink className={style.linkIco} />
          </button>
        </div>
        <div className={style.hostContainer}>
          <p className={style.hostedBy}>HOSTED BY</p>

          <div className={style.hostCard}>
            <div className={style.hostHead}>
              <img className={style.hostImage} src={data.organiser_image_url} />
              <span className={style.hostName}>{data.organiser_name}</span>
            </div>
            <div className={style.hostContent}>
              <div>
                <p className={style.hostDescription}>
                  This is the description of the organiser. You can get to know
                  more about the organiser here.
                </p>
              </div>
              <div className={style.hostSocialLink}>
                <p>Contact Us On</p>
                <div className={style.socialIcons}>
                  <a href={data.organizer_facebook_url}>
                    <FaFacebook />
                  </a>
                  <a href={data.organizer_twitter_url}>
                    <FaXTwitter />
                  </a>
                  <a href={data.organizer_linkedin_url}>
                    <FaLinkedin />
                  </a>
                  <a href={data.organiser_website}>
                    <FaGlobe />
                  </a>
                  <a href={data.organiser_email}>
                    <IoMail />
                  </a>
                  <a href={data.organiser_phone}>
                    <FaPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
