import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { urlFor } from "lib/client";
import styles from "./GetLookMobile.module.scss";

const GetLookMobile = ({ images }) => {
  const settings = {
    mouseTracking: true,
    autoPlay: true,
    disableDotsControls: false,
    disableButtonsControls: true,
    infinite: true,
    stopAutoPlayOnHover: true,
    disableAutoPlayOnAction: true,
    autoPlayStrategy: "default",
    animationDuration: 1000,
    autoPlayInterval: 10000
  };

  return (
    <section className={styles.getLook}>
      <AliceCarousel {...settings}>
        {images?.map(img => (
          <div key={img._key}>
            <div className={styles.image}>
              <img src={urlFor(img)} alt="collection image" />
            </div>
          </div>
        ))}
      </AliceCarousel>
    </section>
  );
};

export default GetLookMobile;
