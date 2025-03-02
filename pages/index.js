import {useContext, useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { client } from "lib/client";
import {
  CollectionsPreview,
  Product,
  RandomPreview,
  Scetch,
  AboutPreview,
  ContactUs,
  Layout
} from "components";
import {useRouter} from "next/router";
import {existsGaId, GA_TRACKING_ID} from "../lib/ga";
import TabButton from "../components/UI/Buttons/TabButton/TabButton";
import {LanguageContext} from "../context/LanguageContext";

const Home = ({  collections, pieces, categories, randomItem, about }) => {
  const title = "Yuliya Kutovaya Jewelry";
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
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
  
  const filteredPieces = selectedCategory === "all"
      ? pieces
      : pieces.filter(piece => piece.category.slug.current === selectedCategory);
  
  
  return (
    <Layout title={title}>
      <h1 aria-label="Эксклюзивные ювелирные украшения Yuliya Kutovaya Jewelry Кутовая Юлия купить заказать в Ташкенте"></h1>
      <div>
        <CollectionsPreview collections={collections} />
      </div>

      <div className="container">
        <div className="categoriesSelector">
          <TabButton
              key="all"
              activeTab={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
          >
            {locale === "en" ? "All" : "Все"}
          </TabButton>
          {categories.map((category) => (
              <TabButton
                  key={category._id}
                  activeTab={selectedCategory === category.slug.current}
                  onClick={() => setSelectedCategory(category.slug.current)}
              >
                {locale === "en" ? category.titleEn : category.titleRu}
              </TabButton>
          ))}
        </div>
        <div className="productsWrapper">
          {filteredPieces.map((piece) => (
              <Product piece={piece} key={piece._id} />
          ))}
        </div>
      </div>

      <Scetch />
      
      {randomItem && <RandomPreview randomItem={randomItem} />}
      
      {about && <AboutPreview about={about} />}
      <ContactUs />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const modelsQuery = `*[_type == "model"]{
    _id,
    title,
    titleEn,
    slug,
    category->,
    collection->,
    piece[]->{
      _id,
      title,
      price,
      gem->{
        _id,
        key,
        title_ru,
        title_en
      },
      category->,
      randomPreview,
      itemDesc,
      photos[]{
        _key,
        itemImage{
          asset->{
            _id,
            url
          }
        },
        imagePlaceholder{
          asset->{
            _id,
            url
          }
        }
      }
    }
  }`;
  const categoryQuery = '*[_type == "category"]';
  const collectionQuery = '*[_type == "collection"]';
  const aboutQuery = '*[_type == "about"]';
  
  const models = await client.fetch(modelsQuery);
  const categories = await client.fetch(categoryQuery);
  const collections = await client.fetch(collectionQuery);
  const about = await client.fetch(aboutQuery);
  
  let pieces = models.flatMap((model) =>
      model.piece.map((p) => ({
        ...p,
        title: model.title,
        titleEn: model.titleEn,
        slug: model.slug,
        photos: p.photos?.length ? p.photos : [],
      }))
  );
  
  let newProducts = pieces.filter(el => el.randomPreview !== null);
  let randomItem = newProducts[Math.floor(Math.random() * newProducts.length)];
 

  return {
    props: {
      pieces,
      collections,
      categories,
      models,
      randomItem,
      about
    }
  };
};



export default Home;
