import { useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";

import { urlFor } from "lib/client";
import styles from "./RandomPreview.module.scss";

const RandomPreview = ({ randomItem }) => {
  const { randomPreview, slug, productItems } = randomItem;
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });


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
              alt={slug.current}
            />
          </div>
        ) : (
          <div data-aos={"fade-up"} className={styles.preview}>
            <img
              src={urlFor(randomPreview)}
              onContextMenu={e => e.preventDefault()}
              alt={slug.current}
            />
          </div>
        )}
      </div>

      <div className={styles.col}>
        <Link href={`/product/${slug.current}`} passHref>
          <a>
            <div data-aos={"fade-right"} className={styles.link}>
              <div className={styles.image}>
                <img
                  src={urlFor(productItems[0].itemImage)}
                  alt={slug.current}
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
              <div className={styles.content}>
                <h3>{randomItem.title}</h3>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RandomPreview;
