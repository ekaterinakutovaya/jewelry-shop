export default {
  title: "Изделия",
  name: "productItem",
  type: "object",
  fields: [
    {
      title: "Фото изделия",
      name: "itemImage",
      type: "image"
    },
    {
      title: "Фото placeholder",
      name: "imagePlaceholder",
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
      title: "Цена",
      name: "price",
      type: "number"
    },
  ],
  preview: {
    select: {
      media: "itemImage"
    }
  }
};
