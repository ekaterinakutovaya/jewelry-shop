import React, { useEffect } from "react";
import Slider from "react-slick";
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
        dots: false,
        infinite: true,
        focusOnSelect: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        easing: "linear",
        arrows: true,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    fade: false,
                    autoplay: true,
                    autoplaySpeed: 10000,
                }
            }
        ]
    };

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, [])

    return (
      <Slider {...settings}>
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
      </Slider>
    );
};

export default CollectionsPreview;
