import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { urlFor } from "/lib/client";
import { Button } from "components";

import styles from "./AboutPreview.module.scss";

const AboutPreview = ({ about }) => {
  const { title, previewImage } = about[0];

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.wrapper}>

      <div data-aos={"fade-right"} className={styles.textCol}>
        <div className={styles.info}>
          <h3 className={styles.title}>Yuliya Kutovaya Jewelry</h3>
          <p className={styles.text}>
            – это марка роскошных украшений с тонкими мотивами из самого сердца
            Центральной Азии.
          </p>
          <Button type="dark">
            <Link href="/about">О нас</Link>
          </Button>
        </div>
      </div>

      <div className={styles.imageCol}>
        <div className={styles.image} data-aos={"fade-left"}>
          <img src={urlFor(previewImage)} onContextMenu={e => e.preventDefault()} alt="Yuliya Kutovaya Jewelry Юлия Кутовая Demi-couture jewelry ювелирные украшения изделия купить в Ташкенте" />
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
