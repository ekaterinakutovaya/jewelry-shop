export default {
  name: "model",
  title: "Модели",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string"
    },
    {
      name: "titleEn",
      title: "Название En",
      type: "string"
    },
    {
      title: "Изделия",
      name: "piece",
      type: "array",
      of: [{ type: "reference", to: [{ type: "piece" }] }]
    },
    {
      title: "Категория",
      name: "category",
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      title: "Коллекция",
      name: "collection",
      type: "reference",
      to: [{ type: "collection" }]
    },
    {
      name: "slug",
      title: "ID",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90
      }
    },
  ],
};