import { useState, useEffect } from "react";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

import { urlFor } from "lib/client";
import { Instagram, Telegram } from "Icons";
import { Logo } from "components";

import styles from "./Footer.module.scss";

const Footer = ({ footer }) => {
  const [footerStyles, setFooterStyles] = useState([{
    backgroundColor: "#f2f0f4",
    borderTop: "1px solid transparent"
  }]);

  useEffect(() => {
    if (footer.length) {
      if (footer[0].backgroundImage) {
        setFooterStyles(prevState => [
          ...prevState,
          {
            backgroundImage: `url(${urlFor(footer[0].backgroundImage)})`
          }
        ]);
      } else {
        setFooterStyles(prevState => [
          ...prevState,
          {
            backgroundColor: `${footer[0].backgroundColor}`,
            borderTop: `${footer[0].borderTopSize}px solid ${footer[0].borderTopColor}`
          }
        ]);
      }
    }


    return () => {
      setFooterStyles([]);
    };
  }, [footer]);

  return (
    <div className={styles.footer} style={footerStyles[0]}>
      <div className="container">
        <div className={styles.content}>
          <div className="d-flex justify-content-center">
            <Logo color={footer.length && footer[0].textColor} />
          </div>

          <div className={styles.inner}>
            <div className={styles.social}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/yuliya_kutovaya_jewelry/"
                style={{
                  stroke: `${footer.length && footer[0].textColor}`
                }}
              >
                <svg className={styles.instagramIcon}>
                  <use xlinkHref="#instagram" />
                </svg>
                <Instagram />
              </a>
              <a
                target="_blank"
                href="https://t.me/yuliya_kutovaya_jewelry"
                rel="noreferrer"
                style={{ fill: `${footer.length && footer[0].textColor}` }}
              >
                <svg className={styles.telegramIcon}>
                  <use xlinkHref="#telegram" />
                </svg>
                <Telegram />
              </a>
            </div>

            <div
              className={styles.contacts}
              style={{ color: `${footer.length && footer[0].textColor}` }}
            >
              <a href="tel:+998977501173"><HiOutlinePhone /> + (998) 97 750-11-73</a>
              <a href="mailto:yuliya@kutovaya.ru"><HiOutlineMail />yuliya@kutovaya.ru</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.copyright}
        style={{
          color: `${footer.length && footer[0].textColor}`,
          backgroundColor: `${footer.length && footer[0].copyrightColor}`,
          borderTop: `1px solid ${footer.length && footer[0].borderColor}`
        }}
      >
        <div className={styles.text}>
          <p>&copy;&nbsp;Yuliya Kutovaya Jewelry 2022</p>
          <p className="my-2">Разработка сайта
            <a
              href="https://ekaterina.kutovaya.ru"
              target="_blank"
              rel="noreferrer"
              className={styles.dev}
            >
              Ekaterina Kutovaya
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
