import { useEffect, useState } from "react";
import Link from "next/link";

import {Mozaic} from "Icons";
import styles from "./Logo.module.scss";

const Logo = ({color}) => {
  const [colorValue, setColorValue] = useState('');

  useEffect(() => {
    setColorValue(color);
  }, [color])

  const onMouseEnter = () => {
    setColorValue('#646464');
  }

  const onMouseLeave = () => {
    setColorValue(color);
  }
  

  return (
    <Link href="/" passHref>
      <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={styles.logo}>
          <div className={styles.titleWrapper} style={{ color: `${colorValue}` }}>
            <p className={styles.title}>Yuliya</p>
          </div>
          <div style={{ fill: `${colorValue}` }}>
            <svg className="logoIcon">
              <use xlinkHref="#mozaic" />
            </svg>
          </div>
          <div>
            <Mozaic />
          </div>
  
          <div className={styles.titleWrapper} style={{ color: `${colorValue}` }}>
            <p className={styles.title}>Kutovaya</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
