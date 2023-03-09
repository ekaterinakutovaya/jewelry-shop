import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { urlFor } from "lib/client";
import ArrowNext from "./ArrowNext/ArrowNext";
import ArrowPrev from "./ArrowPrev/ArrowPrev";
import ProgressiveImage from "components/ProgressiveImage/ProgressiveImage";

import styles from "./CollectionsPreview.module.scss";

const CollectionsPreview = ({ collections }) => {

  const settings = {
    animationType: "fadeout",
    mouseTracking: true,
    autoPlay: true,
    infinite: true,
    stopAutoPlayOnHover: true,
    disableAutoPlayOnAction: true,
    autoPlayStrategy: "default",
    animationDuration: 1000,
    autoPlayInterval: 10000,
    renderPrevButton: () => {
      return <ArrowPrev/>
    },
    renderNextButton: () => {
      return <ArrowNext/>
    }
  };
    
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, [])

    return (
      <AliceCarousel {...settings}>
        {collections.map(collection => (
          <div className={styles.wrapper} key={collection._id}>
            <div className={styles.row}>
              <div data-aos={"fade-right"} className={styles.titleWrapper}>
                <div className={styles.textBlock}>
                  <h1 className={styles.title}>{collection.title}</h1>

                  <p className={styles.subtitle}>{collection.subTitle}</p>
                  <Link href={`/collection/${collection.slug.current}`}>
                    <a className={styles.button}>Смотреть</a>
                  </Link>
                </div>
              </div>

              <div className={styles.image}>
                <ProgressiveImage
                  src={urlFor(collection.image)}
                  placeholder={urlFor(collection.imagePlaceholder)}
                  alt={collection.title}
                />
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    );
};

export default CollectionsPreview;
