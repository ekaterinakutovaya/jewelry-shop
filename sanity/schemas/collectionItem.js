export default {
  title: "Collection item",
  name: "collectionItem",
  type: "object",
  fields: [
    {
      title: "Collection Name",
      name: "collectionName",
      type: "string"
    },
    {
      title: "Collection Description",
      name: "collectionDesc",
      type: "string"
    },
    {
      title: "Photo main",
      name: "itemMainImage",
      type: "image"
    },
    {
      title: "Photo main placeholder",
      name: "imageMainPlaceholder",
      type: "image"
    },
    {
      title: "Photo second",
      name: "itemSecondImage",
      type: "image"
    },
    {
      title: "Photo second placeholder",
      name: "imageSecondPlaceholder",
      type: "image"
    },
    {
      title: "Alt",
      name: "alt",
      type: "string"
    },
    {
      title: "Описание",
      name: "itemDesc",
      type: "array",
      of: [{ type: "string" }],
      options: {
        hotspot: true
      }
    },
    {
      title: "Камень",
      name: "gem",
      type: "string"
    },
    {
      title: "Цена",
      name: "price",
      type: "number"
    },
  ],
  preview: {
    select: {
      media: "itemMainImage"
    }
  }
};
