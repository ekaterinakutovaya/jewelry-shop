import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { client } from "lib/client";
import { fetchInstagramFeed } from "lib/api";
import { CollectionsPreview, Product, RandomPreview, Scetch, AboutPreview, InstagramPosts, ContactUs, Layout } from "components";

const Home = ({ products, collections, randomItem, about }) => {
  const title = "Yuliya Kutovaya Jewelry";
  const [feed, setFeed] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetchInstagramFeed()
      .then(response => setFeed(response))

    return () => {
      setFeed({})
    }
  }, [])

  return (
    <Layout title={title}>
      <h1 aria-label="Эксклюзивные ювелирные украшения Yuliya Kutovaya Jewelry заказать в Ташкенте"></h1>
      <div>
        <CollectionsPreview collections={collections} />
      </div>

      <div className="container">
        <div className="productsWrapper" data-aos={"fade"}>
          {products?.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>

      <Scetch />

      <RandomPreview randomItem={randomItem} />

      <AboutPreview about={about} />

      <InstagramPosts feed={feed} />

      <ContactUs />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const collectionQuery = '*[_type == "collection"]';
  const aboutQuery = '*[_type == "about"]';
  const deviderQuery = '*[_type == "devider"]';

  const products = await client.fetch(query);
  const collections = await client.fetch(collectionQuery);
  const about = await client.fetch(aboutQuery);
  const devider = await client.fetch(deviderQuery);

  let newProducts = products.filter(el => el.randomPreview !== undefined);
  let randomItem = newProducts[Math.floor(Math.random() * newProducts.length)];

  // const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;
  // const data = await fetch(url);
  // const feed = await data.json();

  return {
    props: {
      products,
      collections,
      randomItem,
      devider,
      about
      // feed
    }
  };
};



export default Home;
