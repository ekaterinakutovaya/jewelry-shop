import React from "react";

import { client } from "lib/client";
import {
  Layout,
  CollectionItem
} from "components";

const AllCollectionPage = ({collections}) => {
const title = "Коллекции"

  return (
    <Layout title={title}>
      <h1 aria-label="Эксклюзивные ювелирные украшения Yuliya Kutovaya Jewelry Юлия Кутовая заказать в Ташкенте"></h1>
      
      <div className="min-h-[88vh]">
        <div className="flex flex-col">
          {collections && collections.map((collection, index) => (
            <CollectionItem collection={collection} key={index} reverse={index % 2 !== 0}/>
          ))}
        </div>
      </div>
      
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const collectionQuery = '*[_type == "collection"]';
  const collections = await client.fetch(collectionQuery);
  
  return {
    props: {
      collections,
    }
  };
};

export default AllCollectionPage;
