export default {
  name: "allCollection",
  title: "Страница коллекций",
  type: "document",
  fields: [
    {
      name: "topImage",
      title: "Изображение в топе",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "topImagePlaceholder",
      title: "Изображение в топе placeholder",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "title",
      title: "Заголовок",
      type: "string"
    },
    {
      name: "previewImage",
      title: "Фото на превью",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Collection items",
      name: "collectionItems",
      type: "array",
      of: [
        {
          title: "Item",
          type: "collectionItem"
        }
      ]
    },
  ]
};