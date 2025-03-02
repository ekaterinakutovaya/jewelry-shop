import { useRouter } from "next/router";

import { client } from "lib/client";
import {
  Top,
  TopMobile,
  Product,
  GetLook,
  GetLookMobile,
  GoBackButton,
  ContactUs,
  Layout,
  BlockDevider
} from "components";

import styles from "./CollectionPage.module.scss";

const CollectionPage = ({ collection, pieces, randomDevider }) => {
  
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

      <div className="container mt-4">
        <div className="productsWrapper">
          {pieces?.map((piece) => (
            <Product key={piece._id} piece={piece} />
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
  const collectionQuery = `*[_type == "collection" && slug.current == '${slug}'][0] {
  _id,
  title,
  image,
  topImage,
  imagePlaceholder,
  title,
  subTitle,
  lookImage,
  lookBackgroundImage,
  "manuscriptURL": manuscript.asset->url
}`;
 
  const collection = await client.fetch(collectionQuery);
  if (!collection) {
    return {
      notFound: true,
    };
  }
  
  const modelsQuery = `*[_type == "model"]{
    _id,
    _rev,
    title,
    titleEn,
    slug,
    category->,
    collection->,
    piece[]->{
      _id,
      title,
      collection->,
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
  
  const deviderQuery = '*[_type == "devider"]';
  const devider = await client.fetch(deviderQuery);
  
  const models = await client.fetch(modelsQuery);
  
  let pieces = models.filter((m) => m.collection?._id === collection._id && m._id !== collection._id)
      .flatMap((model) =>
      model.piece.map((p) => ({
        ...p,
        title: model.title, // Include model title
        titleEn: model.titleEn, // Include model title
        slug: model.slug, // Include model slug
        photos: p.photos?.length ? p.photos : [], // Ensure photos exist
      }))
  );
  
  let randomDevider = devider[Math.floor(Math.random() * devider.length)];

  return {
    props: { collection, pieces, randomDevider }
  };
};

export default CollectionPage;
