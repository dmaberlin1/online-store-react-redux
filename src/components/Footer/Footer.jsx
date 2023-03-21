import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link draggable={'false'} to={ROUTES.HOME}>
        <img src={LOGO} alt="Stuff" />
      </Link>
    </div>

    <div className={styles.rights}>
      Developed by{" "}
      <a draggable={'false'} href="https://github.com/dmaberlin1" target="_blank" rel="noreferrer">
        dmaberlin
      </a>
    </div>

    <div className={styles.socials}>
      <a draggable={'false'} href="https://instagram.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </a>

      <a draggable={'false'} href="https://facebook.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
      </a>

      <a draggable={'false'} href="https://youtube.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </a>
    </div>
  </section>
);

export default Footer;
