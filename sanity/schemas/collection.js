export default {
  name: "collection",
  title: "Коллекции",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Изображение на главной странице",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "imagePlaceholder",
      title: "Изображение на главной странице placeholder",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "topImage",
      title: "Изображение на странице в топе",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "topImagePlaceholder",
      title: "Изображение на странице в топе placeholder",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "title",
      title: "Название",
      type: "string"
    },
    {
      name: "subTitle",
      title: "Подзаголовок",
      type: "string"
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
    {
      name: "lookImage",
      title: "Изображения для Лука",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true
      }
    },
    {
      name: "lookBackgroundImage",
      title: "Фон для Лука",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: 'manuscript',
      title: 'Видео',
      type: 'file',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        }
      ]
    }
  ]
};