import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import collection from "./collection";
import category from "./category";
import about from "./about";
import aboutParagraph from "./aboutParagraph";
import aboutBlocks from "./aboutBlocks";
import productItem from "./productItem";
import collectionItem from "./collectionItem";
import header from "./header";
import post from "./post";
import postBlocks from "./postBlocks";
import postImages from "./postImages";
import postParagraph from "./postParagraph";
import footer from "./footer";
import devider from "./devider";
import gems from "./gems";
import metal from "./metal";
import model from "./model";
import piece from "./piece";
import photo from "./photo";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    piece,
    model,
    collection,
    category,
    about,
    aboutParagraph,
    aboutBlocks,
    header,
    post,
    postBlocks,
    postImages,
    postParagraph,
    footer,
    devider,
    productItem,
    collectionItem,
    gems,
    metal,
    photo
  ])
});
