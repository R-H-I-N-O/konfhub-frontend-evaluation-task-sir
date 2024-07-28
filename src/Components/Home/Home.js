import React from "react";
import style from "./Home.module.css";
import EventCard from "../EventCard/EventCard";
import TicketCard from "../TicketCard/TicketCard";
import TicketDropdown from "../TicketDropdown/TicketDropdown";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import WorkshopCard from "../WorkshopCard/WorkshopCard";
import { useAppContext } from "../../Contexts/AppContext";
import SponsorCard from "../SponsorCard/SponsorCard";
import About from "../About/About";

function Home() {
  const data = useAppContext();

  return (
    <div className={style.container}>
      <div className={style.BoxContainer}>
        <div className={style.imageContainer}>
          <div className={style.Imagebox}>
            {data ? (
              <>
                <img src={data.event_poster_url} alt="poster" />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        <div className={style.tabBox}>
          <div className={style.tabs}>
            <button className={style.tab}>About</button>

            <button className={style.tab}>Tickets</button>

            <button className={style.tab}>This is speakers Sections</button>

            <button className={style.tab}>This is Workshop section</button>

            <button className={style.tab}>This is event Sponser</button>
          </div>
          <hr className={style.horizontalLine} />
        </div>
        <section id="about">
          <div>
            <h2>ABOUT EVENT</h2>
            <About/>
          </div>
        </section>
        <section id="tickets" className={style.TicketSection}>
          <h2>Tickets</h2>
          <div className={style.ticketBox}>
            <TicketCard
              title={"Free Ticket"}
              description={
                "This is a ticket description. This is a free ticket. This ticket is uncategorised."
              }
              price={"FREE"}
              venue={
                "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              }
              type={"Register"}
            />
            <TicketCard
              title={"Paid Ticket"}
              description={
                "This is a ticket description. This is a paid ticket. This ticket is uncategorised."
              }
              price={"₹1,000"}
              venue={
                "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              }
              type={"Register"}
            />
            <TicketCard
              title={"Donation Ticket"}
              description={
                "This is a ticket description. This is a donation ticket. This ticket is uncategorised."
              }
              price={"Min ₹10 - Max ₹1,000"}
              venue={
                "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              }
              type={"Donate"}
            />
            <TicketCard
              title={"Ticket With Coupon"}
              description={
                "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off."
              }
              price={"₹1,000"}
              venue={
                "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              }
              type={"Register"}
            />
            <TicketDropdown
              title={"This is a category"}
              description={
                "This is category description. This category is collapsed by default."
              }
              number={1}
              collapsed={true}
            />
            <TicketDropdown
              title={
                "This is also a category. But with a little longer name. Also note, this category expanded by default."
              }
              description={
                "This is category description. This category is expanded by default. This is a little longer description. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer."
              }
              number={2}
              collapsed={false}
            />
          </div>
        </section>
        <section id="speaker" className={style.sections}>
          <h2>THIS IS SPEAKERS SECTION</h2>
          <div>
            This is the description for speakers sections.
            <div className={style.speakerCardBox}>
              <SpeakerCard
                speakerName={"Bruce Wayne"}
                speakerImage={data.organiser_image_url}
                speakerDesignation={"Chairman"}
                speakerOrg={"Wayne Enterprises"}
              />
              <SpeakerCard
                speakerName={"Dark Knight"}
                speakerImage={
                  "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
                }
                speakerDesignation={"Batman"}
                speakerOrg={"Gotham"}
              />
            </div>
          </div>
        </section>
        <section id="workshop" className={style.sections}>
          <h2>THIS IS WORKSHOP SECTION</h2>
          <div>
            This is the description for workshop sections.
            <div className={style.workshopCardBox}>
              <WorkshopCard
                poster={
                  "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75"
                }
                title={"How to make more money"}
                timing={"Jun 11th, 2024 at 10:00 AM (IST)"}
                image={data.organiser_image_url}
              />
              <WorkshopCard
                poster={
                  "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75"
                }
                title={"How to fight crime"}
                timing={"Jun 1st, 2034 at 10:00 AM (IST)"}
                image={
                  "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
                }
              />
              <WorkshopCard
                poster={
                  "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75"
                }
                title={"This is a workshop connected to a ticket"}
                timing={"Jun 1st, 2034 at 10:00 AM (IST)"}
                image={[
                  data.organiser_image_url,
                  "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
                ]}
              />
            </div>
          </div>
        </section>
        <section id="eventSponsor" className={style.sections}>
          <h2>THIS IS EVENT SPONSORS</h2>
          <div className={style.sponsorCard}>
            <p>This is description of sponsors section..</p>
            <div className={style.sponsorCardBox}>
              <SponsorCard
                image={
                  "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
                }
                redirect={"https://konfhub.com/"}
              />
              <div className={style.sponsorCategory}>
                <p>SPONSOR CATEGORY</p> <hr />
              </div>
              <SponsorCard
                image={
                  "https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
                }
                redirect={"https://darkknight.in/"}
              />
            </div>
          </div>
        </section>
      </div>

      <div>
      <EventCard />
      </div>
    </div>
  );
}

export default Home;
