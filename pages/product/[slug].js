import {useState, useEffect, useContext} from "react";
import { useRouter } from "next/router";
import { AiOutlineFullscreenExit } from "react-icons/ai";

import { client, urlFor } from "lib/client";
import {
  GoBackButton,
  RandomPreview,
  BlockDevider,
  ProgressiveImage,
  ContactUs,
  Layout,
} from "components";

import styles from "./ProductDetails.module.scss";
import GemButton from "../../components/UI/Buttons/GemButton/GemButton";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import {LanguageContext} from "../../context/LanguageContext";
import {useTranslations} from "../../hooks/useTranslations";

function currencyFormatter(num) {
  let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  });

  return formatter.format(num);
}

const ProductDetails = ({
    model,
  randomItem,
 randomDevider, relatedPieces, gems
}) => {
  const router = useRouter();
  const { locale } = useContext(LanguageContext);
  const t = useTranslations();
  
  const { title, titleEn, piece } = model;
  const [index, setIndex] = useState(0);
  const [activeGem, setActiveGem] = useState('granat');
  const [fullscreen, setFullscreen] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  let activeClassName = styles.active;
  
  useEffect(() => {
    if (router.isReady) {
      const gemFromQuery = router.query.gem || "";
      if (gemFromQuery) {
        setActiveGem(gemFromQuery);
      } else if (piece?.length > 0) {
        setActiveGem(piece[0]?.gem?.key || "");
      }
    }
  }, [router.isReady, router.query.gem, piece]);
  
  useEffect(() => {
    if (!piece || !activeGem) return;
    
    const selectedItem = piece.find((item) => item.gem?.key === activeGem) || piece[0];
    setFilteredItems(selectedItem);
    setIndex(0);
  }, [activeGem, piece]);
  
  
  const fullScreenHandler = () => {
    setFullscreen(!fullscreen);
  };

  const handleGoBack = () => {
    router.back();
  };
  
  // Only show unique gems that are valid (exclude empty gems) for the GemButton
  const uniqueGemsForButtons = [...new Set(piece.map((item) => item.gem?.key).filter(Boolean))];
  
  const gemLabels = gems.reduce((acc, gem) => {
    acc[gem.key] = {
      label: locale === "en" ? gem.title_en : gem.title_ru,
      color: gem.color || "black",
    };
    return acc;
  }, {});
  
  if (!piece) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={locale === "ru" ? title : titleEn}>

      <h1 aria-label={`${title} заказать в Ташкенте`}></h1>
      <div className={styles.back}>
        <GoBackButton handleGoBack={handleGoBack} />
      </div>

      <div className="container">
        <div className={styles.form}>
          <div className={`${styles.col}`}>
            <div className={styles.imagesWrapper}>
              <div className={styles.thumbnailsWrapper}>
                {filteredItems?.photos?.map((item, i) => (
                    <div
                        key={i}
                        className={i === index ? `${styles.thumbnails} ${activeClassName}` : styles.thumbnails}
                        onClick={() => setIndex(i)}
                    >
                      {item?.itemImage && (
                          <ProgressiveImage
                              src={urlFor(item.itemImage.asset.url)}
                              placeholder={urlFor(item.imagePlaceholder.asset.url)}
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
                {filteredItems?.photos?.[index]?.itemImage ? (
                    <ProgressiveImage
                        src={urlFor(filteredItems.photos[index].itemImage)}
                        placeholder={urlFor(filteredItems.photos[index].imagePlaceholder)}
                        alt={`${title} заказать в Ташкенте`}
                    />
                ) : (
                    <p>No image available</p>
                )}
              </div>
            </div>
          </div>
          
          <div className={`${styles.col}`}>
            <div className={styles.description}>
              <h2 className={styles.title}>{locale === "ru" ? title : titleEn}</h2>
              
              {uniqueGemsForButtons.length ? (
                  <div className={`${styles.gemSelector}`}>
                    <span>{t.gem}</span>
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
              
              {filteredItems?.[`itemDesc_${locale}`]?.length > 0
                  ? filteredItems[`itemDesc_${locale}`].map((desc, i) => (
                      <p className={styles.info} key={i}>{desc}</p>
                  ))
                  : <p className={styles.info}>{locale === "ru" ? "Описание отсутствует" : "Description not available"}</p>
              }
              
              {filteredItems?.price ? (
                  <>
                    <p className={styles.price}>
                      {currencyFormatter(filteredItems?.price)}
                    </p>
                    <a
                        className="button button--dark"
                        target="_blank"
                        href="https://t.me/yuliya_kutovaya_jewelry"
                        rel="noreferrer"
                    >
                      {t.order_now}
                    </a>
                  </>
              ) : (
                  <>
                    <p className={styles.price}>{t.price_request}</p>
                    <a
                        className="button button--dark"
                        target="_blank"
                        href="https://t.me/yuliya_kutovaya_jewelry"
                        rel="noreferrer"
                    >
                      {t.know_price}
                    </a>
                  </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {relatedPieces && relatedPieces.length > 0 && (
          <div className="container">
            <RelatedProducts relatedProducts={relatedPieces}/>
          </div>
      )}
      
      {randomDevider.backgroundImage ? (
          <BlockDevider randomDevider={randomDevider} />
      ) : (
          ""
      )}
      
      {randomItem && <RandomPreview randomItem={randomItem} />}
      
      <ContactUs/>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "model"] {
    slug {
      current
    }
  }
  `;

  const models = await client.fetch(query);

  const paths = models.map((product) => ({
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
  const modelQuery = `*[_type == "model" && slug.current == '${slug}'][0]
  {
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
      randomPreview,
      gem->{
        _id,
        key,
        title_ru,
        title_en
      },
      itemDesc_ru,
      itemDesc_en,
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
  }
  `;
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
      randomPreview,
      gem->{
        _id,
        key,
        title_ru,
        title_en
      },
      itemDesc_ru,
      itemDesc_en,
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
  const deviderQuery = '*[_type == "devider"]';
  const collectionQuery = '*[_type == "collection"]';
  const gemsQuery = '*[_type == "gems"]';

  const model = await client.fetch(modelQuery);
  const models = await client.fetch(modelsQuery);
  const devider = await client.fetch(deviderQuery);
  const collections = await client.fetch(collectionQuery);
  const gems = await client.fetch(gemsQuery);
  
  const relatedPieces = models
      .filter(
          (m) =>
              m.collection &&
              m.collection._id === model?.collection?._id &&
              m._id !== model._id
      )
      .map((m) => ({
        ...m.piece?.[0],
        slug: m.slug,
        title: m.title,
        titleEn: m.titleEn,
      }))
      .filter((p) => p !== undefined);

  let randomDevider = devider[Math.floor(Math.random() * devider.length)];
  
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
      model,
      randomItem,
      randomDevider,
      collections,
      relatedPieces,
      gems
    },
    revalidate: 10,
  };
};

export default ProductDetails;
