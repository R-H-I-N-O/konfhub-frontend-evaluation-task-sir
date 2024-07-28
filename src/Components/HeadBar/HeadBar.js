import React from "react";
import style from "./HeadBar.module.css";
import { BsPerson } from "react-icons/bs";
import { useAppContext } from "../../Contexts/AppContext";


function HeadBar() {
  const data = useAppContext();

  return (
    <div className={style.container}>
      <div className={style.HeadBarMain}>
        <div className={style.Imagebox}>
          <a href="#">
          {data ? (
            <>
              <img src={data.navbar_icon} alt="avatar" />
            </>
          ) : (
            <p>Loading...</p>
          )}
          </a>
        </div>

        <div className={style.userIcon}>
          <a href="https://dev-accounts.konfhub.com/login">
          <BsPerson />
          </a>
        </div>
      </div>


    </div>
  );
}

export default HeadBar;
