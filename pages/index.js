import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { client } from "lib/client";
import { fetchInstagramFeed } from "lib/api";
import {
  CollectionsPreview,
  Product,
  RandomPreview,
  Scetch,
  AboutPreview,
  InstagramPosts,
  ContactUs,
  Layout,
  Hero
} from "components";
import {useRouter} from "next/router";
import {existsGaId, GA_TRACKING_ID} from "../lib/ga";
import TabButton from "../components/UI/Buttons/TabButton/TabButton";

const Home = ({ products, collections, categories, randomItem, about }) => {
  const title = "Yuliya Kutovaya Jewelry";
  const [feed, setFeed] = useState({});
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("all"); // default all

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  
  
  useEffect(() => {
    fetchInstagramFeed().then(response => setFeed(response));
    return () => {
      setFeed({});
    };
  }, []);
  
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
  
  const filteredProducts = selectedCategory === "all"
      ? products
      : products.filter(product => product.category === selectedCategory);
  
  const sortedCategories = [...categories].sort((a, b) => new Date(a._createdAt) - new Date(b._createdAt));

  return (
    <Layout title={title}>
      <h1 aria-label="Эксклюзивные ювелирные украшения Yuliya Kutovaya Jewelry Кутовая Юлия купить заказать в Ташкенте"></h1>
      <div>
        <CollectionsPreview collections={collections} />
        {/*<Hero/>*/}
      </div>

      <div className="container">
        <div className="categoriesSelector">
          <TabButton
              key="all"
              activeTab={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
          >
            Все
          </TabButton>
          {sortedCategories && sortedCategories.map(item => (
              <TabButton key={item._id}
                         activeTab={selectedCategory === item.slug.current}
                         onClick={() => setSelectedCategory(item.slug.current)}
              >
                {item.titleRu}
              </TabButton>
          ))}
        </div>
        <div className="productsWrapper" data-aos={"fade"}>
          {filteredProducts?.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>

      <Scetch />

      <RandomPreview randomItem={randomItem} />

      <AboutPreview about={about} />
      
      {Object.keys(feed).length && <InstagramPosts feed={feed} />}
      <ContactUs />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const collectionQuery = '*[_type == "collection"]';
  const categoryQuery = '*[_type == "category"]';
  const aboutQuery = '*[_type == "about"]';
  const deviderQuery = '*[_type == "devider"]';

  const products = await client.fetch(query);
  const collections = await client.fetch(collectionQuery);
  const categories = await client.fetch(categoryQuery);
  const about = await client.fetch(aboutQuery);
  const devider = await client.fetch(deviderQuery);

  let newProducts = products.filter(el => el.randomPreview !== undefined);
  let randomItem = newProducts[Math.floor(Math.random() * newProducts.length)];

  return {
    props: {
      products,
      collections,
      categories,
      randomItem,
      devider,
      about
    }
  };
};



export default Home;
