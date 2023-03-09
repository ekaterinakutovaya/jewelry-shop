import { urlFor } from "lib/client";
import { ProgressiveImage } from "components";
import styles from "./TopMobile.module.scss";

const TopMobile = ({ image, title, subTitle, imagePlaceholder }) => {
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
        <div className={styles.textBlock}>
          <h1 className={styles.title}>{title}</h1>
          {subTitle ? <p className={styles.subtitle}>{subTitle}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default TopMobile;