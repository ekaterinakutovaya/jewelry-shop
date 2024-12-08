import React from "react";
import styles from "../../pages/all-collection/AllCollectionPage.module.scss";
import Image from "next/image";
import { urlFor } from "../../lib/client";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import Link from "next/link";

const CollectionItem = ({ collection, reverse }) => {
  const { title, subTitle, image, topImage, itemImageModel, itemImageModelPlaceholder, itemImage1, itemImage1Placeholder, imagePng, imagePngPlaceholder } = collection;
  
  return (
      // <div className="w-full min-h-[500px] flex border-solid border-t border-b border-[rgb(231,231,231)]">
      
      <>
        <div className="flex flex-col md:hidden border-solid border-b border-[rgb(231,231,231)]">
          
          <div>
            <div className="h-[600px] overflow-hidden relative">
              {itemImage1 && itemImage1Placeholder ? (
                  <ProgressiveImage
                      src={urlFor(itemImage1)}
                      placeholder={urlFor(itemImage1Placeholder)}
                      alt={title}
                      className="w-full h-[600px] object-cover"
                  />
              ) : (
                  <Image
                      src={urlFor(topImage).url()}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      // style={{ height: "600px" }}
                      className="h-[600px]"
                  />
              )}
            </div>
          </div>
          
          <div className="text-center my-6">
            <h2 className={styles.title}>{title || ""}</h2>
            <p className={styles.subtitle}>{subTitle || ""}</p>
            
            <Link href={`/collection/${collection.slug.current}`}>
              <a className={styles.button}>Смотреть</a>
            </Link>
          </div>
        </div>
        
        
        <div className="w-full hidden md:flex">
          {/* Adjust order based on the reverse prop */}
          <div
              className={`w-1/2 min-h-full flex flex-col justify-center items-center relative ${reverse ? "order-1" : "order-0"}`}>
            <h2 className={styles.title}>{title || ""}</h2>
            <p className={styles.subtitle}>{subTitle || ""}</p>
            
            <Link href={`/collection/${collection.slug.current}`}>
              <a className={styles.button}>Смотреть</a>
            </Link>
          </div>
          
          <div className={`w-1/2 flex ${reverse ? "order-0" : "order-1"}`}>
            <div className="md:w-full lg:w-1/2 h-[600px] overflow-hidden relative">
            {itemImage1 && itemImage1Placeholder ? (
                  <ProgressiveImage
                      src={urlFor(itemImage1)}
                      placeholder={urlFor(itemImage1Placeholder)}
                      alt={title}
                      className="w-full h-[600px] object-cover"
                  />
              ) : (
                  <Image
                      src={urlFor(topImage).url()}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      // style={{ height: "600px" }}
                      className="h-[600px]"
                  />
              )}
            </div>
            
            <div className="md:w-full lg:w-1/2 h-[600px] overflow-hidden relative md:hidden lg:block">
              {itemImageModel && itemImageModelPlaceholder ? (
                  <ProgressiveImage
                      src={urlFor(itemImageModel)}
                      placeholder={urlFor(itemImageModelPlaceholder)}
                      alt={title}
                      className="w-full h-[600px] object-cover"
                  />
              ) : (
                  <Image
                      src={urlFor(image).url()}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      // style={{ height: "600px" }}
                      className="h-[600px]"
                  />
              )}
            </div>
          </div>
        </div>
      </>
  
  );
};

export default CollectionItem;
