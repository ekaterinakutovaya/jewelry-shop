import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { urlFor } from "lib/client";

import styles from "./GetLook.module.scss";

const GetLook = ({ images, background }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200
    });
    AOS.refresh();
  }, []);

  return (
      <div
        data-aos={"fade"}
        className={styles.look}
        style={{ backgroundImage: `url(${urlFor(background)}` }}
      >
        {images?.map(img => (
            <div data-aos={"fade-up"} className={styles.image} key={img._key}>
              <img src={urlFor(img)} alt="collection image"/>
            </div>
        ))}
      </div>
  );
};

export default GetLook;
