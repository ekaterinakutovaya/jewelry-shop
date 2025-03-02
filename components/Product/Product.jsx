import Link from "next/link";

import { urlFor } from "lib/client";
import { ProgressiveImage } from "components";
import styles from "./Product.module.scss";
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";

const Product = ( {piece} ) => {
  const { locale } = useContext(LanguageContext);
  
  if (!piece || !piece.slug) return null;
  
  const gemKey = piece?.gem?.key || "";
  const firstPhoto = piece?.photos?.[0]?.itemImage;
  const placeholder = piece?.photos?.[0]?.imagePlaceholder;
  
  return (
    <Link  href={`/product/${piece?.slug?.current}?gem=${gemKey}`} passHref>
      <a className="">
        <div className={`${styles.link}`}>
          <div className={`${styles.image}`}>
            {firstPhoto  ? (
              <ProgressiveImage
                src={urlFor(firstPhoto)}
                placeholder={urlFor(placeholder)}
                alt={`${locale === "ru" ? piece.title : piece.titleEn} заказать в Ташкенте`}
              />
            ) : (
              <img
                src={urlFor(firstPhoto)}
                alt={`${locale === "ru" ? piece.title : piece.titleEn} заказать в Ташкенте`}
                onContextMenu={(e) => e.preventDefault()}
              />
            )}
          </div>
          <div className={styles.content}>
            <h3>{locale === "ru" ? piece.title : piece.titleEn}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Product;
