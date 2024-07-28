import { useState } from "react";
import styles from "./TicketDropdown.module.css";
import TicketCard from "../TicketCard/TicketCard";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const TicketDropdown = ({ title, description, number, collapsed }) => {
  const [hidden, setVisibleA] = useState(collapsed);
  return (
    <>
      <button
        color="primary"
        onClick={() => setVisibleA(!hidden)}
        className={styles.dropdownButton}
      >
        {title} {hidden ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      <div hidden={hidden}>
        <div className={styles.dropdownContent}>
          <div className={styles.dropdownDescription}>{description}</div>
          <TicketCard
            title={`Free Ticket in Category${number}`}
            description={
              "This is a ticket description. This is a paid ticket. This ticket is categorised."
            }
            venue={
              "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
            }
            price={"FREE"}
            type={"Register"}
          />
          <TicketCard
            title={`Paid Ticket in Category${number}`}
            description={
              "This is a ticket description. This is a paid ticket. This ticket is categorised."
            }
            venue={
              "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
            }
            price={"₹1,000"}
            type={"Register"}
          />
        </div>
      </div>
    </>
  );
};

export default TicketDropdown;
