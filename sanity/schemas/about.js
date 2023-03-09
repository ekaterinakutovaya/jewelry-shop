export default {
  name: "about",
  title: "О нас",
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
      title: "Блоки",
      name: "blocks",
      type: "array",
      of: [
        {
          title: "Параграфы",
          type: "aboutBlocks"
        }
      ]
    },
    {
      name: "previewImage",
      title: "Фото на превью",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};