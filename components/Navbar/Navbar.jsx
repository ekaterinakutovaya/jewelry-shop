import { useState, useEffect } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";

import { urlFor } from "/lib/client";
import { Logo, DropdownMenu } from "components";
import { Instagram, Telegram } from "Icons";

import styles from "./Navbar.module.scss";

const items = [
  {
    value: (
      <Link href="/post" className={styles.linkAbout}>
        31 января - День Ювелира
      </Link>
    )
  },
  {
    value: (
      <Link href="/" className={styles.linkAbout}>
        Все изделия
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
        О Нас
      </Link>
    )
  }
];

const Navbar = ({ header }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isOpen, setOpen] = useState(false);
  const [navbarStyles, setNavbarStyles] = useState([{
    backgroundColor: "#fff",
    borderBottom: "1px solid #e7e7e7"
  }]);

  useEffect(() => {
    if (header.length) {
      if (header[0].backgroundImage) {
        setNavbarStyles(prevState => [
          ...prevState,
          {
            backgroundImage: `url(${urlFor(header[0].backgroundImage)})`
          }
        ]);
      } else {
        setNavbarStyles(prevState => [
          ...prevState,
          {
            backgroundColor: `${header[0].backgroundColor}`,
            borderBottom: `${header[0].borderBottomSize}px solid ${header[0].borderBottomColor}`
          }
        ]);
      }
    }

  
    return () => {
      setNavbarStyles([]);
    };
  }, [header]);

  return (
    <nav className={styles.navbar} style={navbarStyles[0]}>
      <Logo color={header.length && header[0].textColor} />

      {isTabletOrMobile && (
        <>
          <Hamburger
            size={30}
            direction="right"
            distance="lg"
            color={header.length && header[0].textColor}
            label="Show menu"
            hideOutline={true}
            toggled={isOpen}
            toggle={setOpen}
          />
        </>
      )}

      {isOpen ? (
        <DropdownMenu
          items={items}
          color={header.length && header[0].textColor}
          backgroundColor={header.length && header[0].backgroundColor}
          borderColor={header.length && header[0].borderBottomColor}
        />
      ) : (
        ""
      )}

      <ul className={styles.navList}>
        <li style={{ color: `${header.length && header[0].textColor}` }}>
          <Link href="/post" passHref>
            <a className={styles.day}>31 января - День Ювелира</a>
          </Link>
        </li>

        <li>
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/yuliya_kutovaya_jewelry/"
            style={{ stroke: `${header.length && header[0].textColor}` }}
          >
            <svg className={styles.instagramIcon}>
              <use xlinkHref="#instagram" />
            </svg>
            <Instagram />
          </a>
        </li>

        <li>
          <a
            className={styles.link}
            target="_blank"
            href="https://t.me/yuliya_kutovaya_jewelry"
            rel="noreferrer"
            style={{ fill: `${header.length && header[0].textColor}` }}
          >
            <svg className={styles.telegramIcon}>
              <use xlinkHref="#telegram" />
            </svg>
            <Telegram />
          </a>
        </li>

        <li style={{ color: `${header.length && header[0].textColor}` }}>
          <a className={styles.phone} href="tel:+998977501173">
            + (998) 97 750-11-73
          </a>
        </li>

        <li style={{ color: `${header.length && header[0].textColor}` }}>
          <Link href="/about" passHref>
            <a className={styles.phone}>О Нас</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
