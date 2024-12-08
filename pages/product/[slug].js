import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineFullscreenExit } from "react-icons/ai";

import { client, urlFor } from "lib/client";
import { fetchInstagramFeed } from "lib/api";
import {
  GoBackButton,
  RandomPreview,
  BlockDevider,
  InstagramPosts,
  ProgressiveImage,
  ContactUs,
  Layout,
} from "components";

import styles from "./ProductDetails.module.scss";
import GemButton from "../../components/UI/Buttons/GemButton/GemButton";

function currencyFormatter(num) {
  let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  });

  return formatter.format(num);
}

const ProductDetails = ({
  product,
  randomItem,
  randomDevider,
}) => {
  const router = useRouter();
  
  
  
  const { title, productItems } = product;
  const [index, setIndex] = useState(0);
  const [activeGem, setActiveGem] = useState('granat');
  const [fullscreen, setFullscreen] = useState(false);
  const [feed, setFeed] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  let activeClassName = styles.active;
  
  const {asPath} = router;
  
  useEffect(() => {
    window.scroll(0, 0);
    const defaultGem = asPath.split("-").pop();
    setActiveGem(defaultGem);
  }, [asPath]);
  
  useEffect(() => {
    const filtered = productItems?.filter(item => item.gem === activeGem || !item.gem);
    setFilteredItems(filtered);
    
    setIndex(0);
  }, [activeGem, productItems]);

  useEffect(() => {
    fetchInstagramFeed().then((response) => setFeed(response));

    return () => {
      setFeed({});
    };
  }, []);

  const fullScreenHandler = () => {
    setFullscreen(!fullscreen);
  };

  const handleGoBack = () => {
    router.back();
  };
  
  // Only show unique gems that are valid (exclude empty gems) for the GemButton
  const uniqueGemsForButtons = [...new Set(productItems.map((item) => item.gem).filter(Boolean))];
  
  const gemLabels = {
    granat: { label: "Гранат", color: "red" },
    peridot: { label: "Перидот (хризолит)", color: "green" },
    blue_topaz: { label: "Голубой топаз", color: "blue" },
    pink_tourmalines: { label: "Розовые турмалины", color: "pink" },
    apatit: { label: "Апатиты", color: "#6d878b" },
    turquoise: { label: "Бирюза", color: "#219EBC" },
    emerald: { label: "Изумруд", color: "#76C893" },
    rhodolite: { label: "Родолит", color: "#FF006E" },
  };
  
  if (!product) {
    return <div>Loading...</div>; // or some fallback content
  }

  return (
    <Layout title={title}>

      <h1 aria-label={`${title} заказать в Ташкенте`}></h1>
      <div className={styles.back}>
        <GoBackButton handleGoBack={handleGoBack} />
      </div>

      <div className="container">
        <div className={styles.form}>
          <div className={`${styles.col}`}>
            <div className={styles.imagesWrapper}>
              <div className={styles.thumbnailsWrapper}>
                {filteredItems && filteredItems.map((item, i) => (
                    <div
                        key={i}
                        className={
                          i === index
                              ? `${styles.thumbnails} ${activeClassName}`
                              : `${styles.thumbnails}`
                        }
                        onClick={() => setIndex(i)}
                    >
                      {item?.itemImage && (
                          <ProgressiveImage
                              src={urlFor(item.itemImage)}
                              placeholder={urlFor(item.imagePlaceholder)}
                              alt={`${title} заказать в Ташкенте`}
                          />
                      )}
                    </div>
                ))}
              </div>

              <div
                className={
                  fullscreen ? `${styles.imageFullscreen}` : `${styles.image}`
                }
                onClick={fullScreenHandler}
              >
                <AiOutlineFullscreenExit
                  className={
                    fullscreen
                      ? `${styles.fullscreenExit}`
                      : `${styles.fullscreenExit} d-none`
                  }
                  onClick={() => setFullscreen(!fullscreen)}
                />
                {filteredItems[index]?.itemImage ? (
                    <ProgressiveImage
                        src={urlFor(filteredItems[index].itemImage)}
                        placeholder={urlFor(filteredItems[index].imagePlaceholder)}
                        alt={`${title} заказать в Ташкенте`}
                    />
                ) : (
                    <p>No image available</p>  // You can show a placeholder or text if no image exists
                )}
              </div>
            </div>
          </div>

          <div className={`${styles.col}`}>
            <div className={styles.description}>
              <h2 className={styles.title}>{title}</h2>
              {uniqueGemsForButtons.length ? (
                  <div className={`${styles.gemSelector}`}>
                    <span>Камень</span>
                    <div className={`${styles.gemSelectorInner}`}>
                      {uniqueGemsForButtons.map((gem, i) => (
                          <GemButton
                              key={i}
                              gem={gem}
                              gemLabel={gemLabels[gem]?.label || gem}
                              activeGem={activeGem}
                              onChange={setActiveGem}
                              color={gemLabels[gem]?.color || "black"}
                          />
                      ))}
                    </div>
                  </div>
              ) : ""}
              
              
              {filteredItems && filteredItems[index]?.itemDesc?.map((desc, i) => (
                  <p className={styles.info} key={i}>
                    {desc}
                  </p>
              ))}
              
              {filteredItems && filteredItems[0]?.price ? (
                  <>
                    <p className={styles.price}>
                      {currencyFormatter(filteredItems[0].price)}
                    </p>
                    <a
                        className="button button--dark"
                        target="_blank"
                        href="https://t.me/yuliya_kutovaya_jewelry"
                        rel="noreferrer"
                    >
                      Заказать
                    </a>
                  </>
              ) : (
                  <>
                    <p className={styles.price}>Цена по запросу</p>
                    <a
                        className="button button--dark"
                        target="_blank"
                        href="https://t.me/yuliya_kutovaya_jewelry"
                        rel="noreferrer"
                    >
                      Узнать цену
                    </a>
                  </>
              )}
            </div>
          </div>
        </div>
      </div>

      {randomDevider.backgroundImage ? (
        <BlockDevider randomDevider={randomDevider} />
      ) : (
        ""
      )}

      <RandomPreview randomItem={randomItem} />
      
      {feed && <InstagramPosts feed={feed} />}

      <ContactUs />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const deviderQuery = '*[_type == "devider"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  const devider = await client.fetch(deviderQuery);

  let randomDevider = devider[Math.floor(Math.random() * devider.length)];

  let newProducts = products.filter((el) => el.randomPreview !== undefined);
  let randomItem = newProducts[Math.floor(Math.random() * newProducts.length)];

  return {
    props: {
      products,
      product,
      randomItem,
      devider,
      randomDevider,
    },
    revalidate: 10,
  };
};

export default ProductDetails;
