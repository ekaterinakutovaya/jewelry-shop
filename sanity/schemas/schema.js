import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import collection from "./collection";
import about from "./about";
import aboutParagraph from "./aboutParagraph";
import aboutBlocks from "./aboutBlocks";
import productItem from "./productItem";
import header from "./header";
import post from "./post";
import postBlocks from "./postBlocks";
import postImages from "./postImages";
import postParagraph from "./postParagraph";
import footer from "./footer";
import devider from "./devider";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    product,
    collection,
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
    productItem
  ])
});
