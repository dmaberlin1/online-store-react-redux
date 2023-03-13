import React from 'react';
import styles from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import logo from "../../images/logo.svg";
const Footer = () => {
    return (
      <section className={styles.footer}>
          <div className={styles.logo}>
              <Link draggable={'false'} to={ROUTES.HOME}>
                  <img  draggable={'false'} src={logo} alt="stuff"/>
              </Link>
          </div>
        
          <div className={styles.rights}>
              Developed by <a draggable={'false'} target='_blank'
                              rel={'noreferrer'}
            href="https://github.com/dmaberlin1"
          >dmaberlin1</a>
          </div>

          <div className={styles.socials}>
              <a draggable={'false'} target='_blank'
                 rel={'noreferrer'}
                 href="https://www.instagram.com/"
              >
              <svg className="icon">
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}></use>
              </svg>
              </a>
              <a draggable={'false'} target='_blank'
                 rel={'noreferrer'}
                 href="https://www.facebook.com/"
              >
              <svg className="icon">
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}></use>
              </svg>
              </a>
              <a draggable={'false'} target='_blank'
                 rel={'noreferrer'}
                 href="https://www.youtube.com/"
              >
              <svg className="icon">
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}></use>
              </svg>
              </a>
          </div>
      </section>
    );
};

export default Footer;
