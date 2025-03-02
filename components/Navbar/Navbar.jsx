import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";

import {Logo, DropdownMenu, LanguageSwitcher} from "components";
import { Instagram, Telegram } from "Icons";

import styles from "./Navbar.module.scss";
import {useTranslations} from "../../hooks/useTranslations";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations();
  
  const items = [
    {
      value: (
          <Link href="/all-collection" className={styles.linkAbout}>
            {t.collections}
          </Link>
      )
    },
    {
      value: (
          <Link href="/" className={styles.linkAbout}>
            {t.all_products}
          </Link>
      )
    },
    {
      value: (
          <Link href="/post" className={styles.linkAbout}>
            {t.jewellers_day}
          </Link>
      )
    },
    {
      value: (
          <>
            <svg className={styles.instagramIcon}>
              <use xlinkHref="#instagram" />
            </svg>
            <Instagram />
          </>
      ),
      href: "https://www.instagram.com/yuliya_kutovaya_jewelry/"
    },
    {
      value: (
          <>
            <svg className={styles.telegramIcon}>
              <use xlinkHref="#telegram" />
            </svg>
            <Telegram />
          </>
      ),
      href: "https://t.me/yuliya_kutovaya_jewelry"
    },
    {
      value: "+ (998) 97 750-11-73",
      href: "tel:+998977501173"
    },
    {
      value: (
          <Link href="/about" className={styles.linkAbout}>
            {t.about_us}
          </Link>
      )
    }
  ];

  return (
    <nav className={styles.navbar} style={{
      backgroundColor: "#fff",
      borderBottom: "1px solid #e7e7e7"
    }}>
      <Logo color="#212529" />
      
        {isTabletOrMobile && (
            <div className="flex items-center gap-4">
              <LanguageSwitcher/>
              <Hamburger
                  size={30}
                  direction="right"
                  distance="lg"
                  color="#212529"
                  label="Show menu"
                  hideOutline={true}
                  toggled={isOpen}
                  toggle={setOpen}
              />
            </div>
        )}

      {isOpen ? (
        <DropdownMenu
          items={items}
          color="#212529"
          backgroundColor="#ffffff"
          borderColor="#e7e7e7"
        />
      ) : (
        ""
      )}
      
      <ul className={`${styles.navList}`}>
        <li style={{color: '#212529'}} className="">
          <Link href="/all-collection" passHref>
            <div className={styles.day}>{t.collections}</div>
          </Link>
        </li>
        <li style={{color: '#212529'}}>
          <Link href="/post" passHref>
            <a className={styles.day}>{t.jewellers_day}</a>
          </Link>
        </li>
        
        <li>
          <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/yuliya_kutovaya_jewelry/"
              style={{stroke: '#212529'}}
          >
            <svg className={styles.instagramIcon}>
              <use xlinkHref="#instagram"/>
            </svg>
            <Instagram/>
          </a>
        </li>
        
        <li>
          <a
              className={styles.link}
              target="_blank"
              href="https://t.me/yuliya_kutovaya_jewelry"
              rel="noreferrer"
              style={{fill: '#212529'}}
          >
            <svg className={styles.telegramIcon}>
              <use xlinkHref="#telegram"/>
            </svg>
            <Telegram/>
          </a>
        </li>
        
        <li style={{color: '#212529'}}>
          <a className={styles.phone} href="tel:+998977501173">
            + (998) 97 750-11-73
          </a>
        </li>
        
        <li style={{color: '#212529'}}>
          <Link href="/about" passHref>
            <a className={`${styles.aboutUs} capitalize`}>{t.about_us}</a>
          </Link>
        </li>
        
        <li style={{color: '#212529'}}>
          <LanguageSwitcher/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
