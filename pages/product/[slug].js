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
  // feed,
  randomDevider,
}) => {
  const router = useRouter();
  const { title, productItems } = product;
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [feed, setFeed] = useState({});
  let activeClassName = styles.active;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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

  return (
    <Layout title={title}>
      {/******Disabled temporarily ******/}
      {/* <Popup visible={modal} setVisible={setModal}>
          <QueryForm
            image={productItems[index].itemImage}
            productName={title}
            visible={modal}
            setVisible={setModal}
          />
        </Popup> */}

      <h1 aria-label={`${title}  заказать в Ташкенте`}></h1>
      <div className={styles.back}>
        <GoBackButton handleGoBack={handleGoBack} />
      </div>

      <div className="container">
        <div className={styles.form}>
          <div className={styles.col}>
            <div className={styles.imagesWrapper}>
              <div className={styles.thumbnailsWrapper}>
                {productItems?.map((item, i) => (
                  <div
                    key={i}
                    className={
                      i === index
                        ? `${styles.thumbnails} ${activeClassName}`
                        : `${styles.thumbnails}`
                    }
                    onClick={() => setIndex(i)}
                  >
                    <ProgressiveImage
                      src={urlFor(productItems[i].itemImage)}
                      placeholder={urlFor(productItems[i].imagePlaceholder)}
                      alt={`${title} заказать в Ташкенте`}
                    />
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
                <ProgressiveImage
                  src={urlFor(productItems[index]?.itemImage)}
                  placeholder={urlFor(productItems[index]?.imagePlaceholder)}
                  alt={`${title} заказать в Ташкенте`}
                />
              </div>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.description}>
              <h2 className={styles.title}>{title}</h2>

              {productItems[index]?.itemDesc?.map((desc, i) => (
                <p className={styles.info} key={i}>
                  {desc}
                </p>
              ))}

              {productItems[0].price ? (
                <>
                  <p className={styles.price}>
                    {currencyFormatter(productItems[0].price)}
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

      <InstagramPosts feed={feed} />

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

  // const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;
  // const data = await fetch(url);
  // const feed = await data.json();

  return {
    props: {
      products,
      product,
      randomItem,
      devider,
      // feed,
      randomDevider,
    },
    revalidate: 10,
  };
};

export default ProductDetails;
