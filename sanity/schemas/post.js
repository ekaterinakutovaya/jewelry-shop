export default {
  name: "post",
  title: "Статья",
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
      name: "title_ru",
      title: "Заголовок",
      type: "string"
    },
    {
      name: "title_en",
      title: "Заголовок En",
      type: "string"
    },
    {
      title: "Блоки",
      name: "blocks",
      type: "array",
      of: [
        {
          title: "Параграфы",
          type: "postBlocks"
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