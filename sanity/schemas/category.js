export default {
  name: "category",
  title: "Категории",
  type: "document",
  fields: [
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
      name: "titleRu",
      title: "Название",
      type: "string"
    },
    {
      name: "titleEn",
      title: "Название En",
      type: "string"
    },
    {
      name: "titleUz",
      title: "Название Uz",
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
        source: "titleEn",
        maxLength: 90
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