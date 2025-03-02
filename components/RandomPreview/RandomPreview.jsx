import {useContext, useEffect} from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";

import { urlFor } from "lib/client";
import styles from "./RandomPreview.module.scss";
import {useTranslations} from "../../hooks/useTranslations";
import {LanguageContext} from "../../context/LanguageContext";

const RandomPreview = ({ randomItem }) => {
  const t = useTranslations();
  const { randomPreview, modelSlug, photos } = randomItem;
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const { locale } = useContext(LanguageContext);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.col}>
        {isTabletOrMobile ? (
          <div data-aos={"fade-up"} className={styles.preview}>
            <img
              src={urlFor(randomPreview)}
              onContextMenu={e => e.preventDefault()}
              alt={modelSlug}
            />
          </div>
        ) : (
          <div data-aos={"fade-up"} className={styles.preview}>
            <img
              src={urlFor(randomPreview)}
              onContextMenu={e => e.preventDefault()}
              alt={modelSlug}
            />
          </div>
        )}
      </div>

      <div className={styles.col}>
        <Link href={`/product/${modelSlug}`} passHref>
          <a>
            <div data-aos={"fade-right"} className={styles.link}>
              <div className={styles.image}>
                <img
                  src={urlFor(photos[0].itemImage)}
                  alt={modelSlug}
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
              <div className={styles.content}>
                <h3>{locale === "ru" ? randomItem.title : randomItem.titleEn}</h3>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RandomPreview;
