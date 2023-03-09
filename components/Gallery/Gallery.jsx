import React, { useEffect, useState } from 'react';
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import { urlFor } from "lib/client";

import styles from "./Gallery.module.scss";

const Gallery = ({ props }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (props) {
      props.map(item => {
        setItems(prevState => [
          ...prevState,
          {
            src: `${urlFor(item.image)}`,
            thumbnail: `${urlFor(item.image)}`
          }
        ]);
      })
    }

    return () => {
      setItems([]);
    }
  }, [])


  return (
    <Carousel
      images={items}
      className={styles.image}
      hasMediaButton={false}
    />
  );
};

export default Gallery;