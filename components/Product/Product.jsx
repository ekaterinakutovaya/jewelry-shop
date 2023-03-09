import Link from "next/link";

import { urlFor } from "lib/client";
import { ProgressiveImage } from "components";
import styles from "./Product.module.scss";

const Product = ({ product: { title, slug, productItems } }) => {

  return (
    <Link href={`/product/${slug.current}`} passHref>
      <a>
        <div className={styles.link}>
          <div className={styles.image}>
            {productItems[0].imagePlaceholder ? (
              <ProgressiveImage
                src={urlFor(productItems[0].itemImage)}
                placeholder={urlFor(productItems[0].imagePlaceholder)}
                alt={title}
              />
            ) : (
              <img
                src={urlFor(productItems[0].itemImage)}
                alt={title}
                onContextMenu={e => e.preventDefault()}
              />
            )}
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Product;
