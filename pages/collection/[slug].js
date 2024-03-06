import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { client } from "lib/client";
import { fetchInstagramFeed } from "lib/api";
import {
  Top,
  TopMobile,
  Product,
  GetLook,
  GetLookMobile,
  InstagramPosts,
  GoBackButton,
  ContactUs,
  Layout,
  BlockDevider
} from "components";

import styles from "./CollectionPage.module.scss";

const CollectionPage = ({ collection, products, randomDevider }) => {

  const router = useRouter();
  const {
    topImage,
    title,
    subTitle,
    lookImage,
    lookBackgroundImage,
    imagePlaceholder,
    manuscriptURL
  } = collection;
  const [feed, setFeed] = useState({});

  useEffect(() => {
    fetchInstagramFeed()
      .then(response => setFeed(response))

    return () => {
      setFeed({})
    }
  }, [])

  const handleGoBack = e => {
    e.preventDefault();
    router.back();
  };

  return (
    <Layout title={title}>
      <h1 aria-label="Эксклюзивные ювелирные украшения Yuliya Kutovaya Jewelry Юлия Кутовая заказать в Ташкенте"></h1>
      <TopMobile
        image={topImage}
        imagePlaceholder={imagePlaceholder}
        title={title}
        subTitle={subTitle}
      />
      <Top
        image={topImage}
        imagePlaceholder={imagePlaceholder}
        title={title}
        subTitle={subTitle}
      />

      <div className={styles.back}>
        <GoBackButton handleGoBack={handleGoBack} />
      </div>

      <div className="container">
        <div className="productsWrapper">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      {lookImage ? (
        <>
          <GetLookMobile images={lookImage} />
          <GetLook images={lookImage} background={lookBackgroundImage} />
        </>
      ) : (
        <BlockDevider randomDevider={randomDevider} />
      )}

      {/* {manuscriptURL ? (
        <Video/>
      ) : ''} */}
      
      {feed && <InstagramPosts feed={feed} />}

      <ContactUs />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "collection"] {
        slug {
            current
        }
    }`;

  const collections = await client.fetch(query);

  const paths = collections.map(collection => ({
    params: {
      slug: collection.slug.current
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps = async ({ params: { slug, id } }) => {
  const query = `*[_type == "collection" && slug.current == '${slug}'][0] {
    title, image, topImage, imagePlaceholder, title, subTitle, lookImage, lookBackgroundImage,
    "manuscriptURL": manuscript.asset->url
  }`;
  const productsQuery = `*[_type == "product" && tag == '${slug}']`;
  const deviderQuery = '*[_type == "devider"]';
  

  const collection = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  const devider = await client.fetch(deviderQuery);

  let randomDevider = devider[Math.floor(Math.random() * devider.length)];

  // const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;

  // const data = await fetch(url);
  // const feed = await data.json();

  return {
    props: { collection, products, randomDevider }
  };
};

export default CollectionPage;
