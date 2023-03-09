import { urlFor } from "lib/client";
import { ProgressiveImage } from "components";
import styles from "./Intro.module.scss";

const Intro = ({ image, title, subTitle, placeholder }) => {
  return (
    <div className={styles.intro}>
      <ProgressiveImage
        src={urlFor(image)}
        placeholder={urlFor(placeholder)}
        alt={title}
      />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        {subTitle ? <p className={styles.subtitle}>{subTitle}</p> : ""}
      </div>
    </div>
  );
};

export default Intro;
