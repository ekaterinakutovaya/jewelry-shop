import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { urlFor } from "lib/client";
import { ProgressiveImage } from "components";
import styles from "./Top.module.scss";

const Top = ({ image, title, subTitle, imagePlaceholder }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200
        });
        AOS.refresh();
    }, []);

  return (
          <div className={styles.intro}>
          <div className={styles.image}>
              <ProgressiveImage
                  src={urlFor(image)}
                  placeholder={urlFor(imagePlaceholder)}
                  alt={title}
              />
              </div>
              <div className={styles.titleWrapper}>
              <div data-aos={"fade-right"} className={styles.textBlock}>
                  
                          <h1 className={styles.title}>{title}</h1>
                      
                      {subTitle ? <p className={styles.subtitle}>{subTitle}</p> : ""}
                  </div>
              </div>
          </div>
  )
};

export default Top;