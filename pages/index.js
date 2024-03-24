import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { client } from "lib/client";
import { fetchInstagramFeed } from "lib/api";
import { CollectionsPreview, Product, RandomPreview, Scetch, AboutPreview, InstagramPosts, ContactUs, Layout } from "components";
import {useRouter} from "next/router";
import {existsGaId, GA_TRACKING_ID} from "../lib/ga";

const Home = ({ products, collections, randomItem, about }) => {
  const title = "Yuliya Kutovaya Jewelry";
  const [feed, setFeed] = useState({});
  const router = useRouter()

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
  
  useEffect(() => {
    if (!existsGaId) return
    
    const handleRouteChange = (url) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout title={title}>
      <h1 aria-label="Эксклюзивные ювелирные украшения Yuliya Kutovaya Jewelry Кутовая Юлия заказать в Ташкенте"></h1>
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
      
      {feed && <InstagramPosts feed={feed} />}
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

  return {
    props: {
      products,
      collections,
      randomItem,
      devider,
      about
    }
  };
};



export default Home;
