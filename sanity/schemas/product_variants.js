export default {
  name: "product_variants",
  title: "Варианты изделий",
  type: "document",
  fields: [
    {
      name: "title_RU",
      title: "Название RU",
      type: "string"
    },
    {
      name: "title_EN",
      title: "Название EN",
      type: "string"
    },
    {
      title: "Камни",
      name: "gems_options",
      type: "array",
      of: [
        {
          title: "Камни",
          type: "gems"
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