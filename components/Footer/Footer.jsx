import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

import { Instagram, Telegram } from "Icons";
import { Logo } from "components";

import styles from "./Footer.module.scss";
import {useTranslations} from "../../hooks/useTranslations";

const Footer = () => {
  const t = useTranslations();
  
  
  return (
    <div className={styles.footer} style={{
      backgroundColor: "#f2f0f4",
      borderTop: "1px solid transparent"
    }}>
      <div className="container">
        <div className={styles.content}>
          <div className="d-flex justify-content-center">
            <Logo color="#212529" />
          </div>

          <div className={styles.inner}>
            <div className={styles.social}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/yuliya_kutovaya_jewelry/"
                style={{
                  stroke: "#212529",
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
                style={{ fill: "#212529" }}
              >
                <svg className={styles.telegramIcon}>
                  <use xlinkHref="#telegram" />
                </svg>
                <Telegram />
              </a>
            </div>

            <div
              className={styles.contacts}
              style={{ color: "#212529" }}
            >
              <a href="tel:+998977501173">
                <HiOutlinePhone /> + (998) 97 750-11-73
              </a>
              <a href="mailto:support@yuliyakutovaya.uz">
                <HiOutlineMail />
                support@yuliyakutovaya.uz
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.copyright}
        style={{
          color: "#212529",
          backgroundColor: "#f2f0f4",
          borderTop: `1px solid #776c84`,
        }}
      >
        <div className={styles.text}>
          <p>&copy;&nbsp;Yuliya Kutovaya Jewelry {new Date().getFullYear()}</p>
          <p className="my-2">
            {t.developer}
            <a
              href="https://ekaterina.kutovaya.uz"
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
