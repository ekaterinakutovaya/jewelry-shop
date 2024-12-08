export default {
  name: "product",
  title: "Изделия",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string"
    },
    {
      title: "Изделия",
      name: "productItems",
      type: "array",
      of: [
        {
          title: "Изделия",
          type: "productItem"
        }
      ]
    },
    {
      name: "category",
      title: "Категория",
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
      name: "tag",
      title: "Тег коллекции",
      type: "string"
    },
    {
      name: "randomPreview",
      title: "Фото на случайные превью",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "randomPreview"
    }
  }
};