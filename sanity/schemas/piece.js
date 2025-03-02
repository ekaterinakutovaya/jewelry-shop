export default {
  name: "piece",
  title: "Изделия",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string"
    },
    {
      title: "Фото",
      name: "photos",
      type: "array",
      of: [
        {
          title: "Фото",
          type: "photo"
        }
      ]
    },
    {
      title: "Камень",
      name: "gem",
      type: "reference",
      to: [{ type: "gems" }]
    },
    {
      title: "Описание",
      name: "itemDesc_ru",
      type: "array",
      of: [{ type: "string" }],
      options: {
        hotspot: true
      },
      initialValue: []
    },
    {
      title: "Описание En",
      name: "itemDesc_en",
      type: "array",
      of: [{ type: "string" }],
      options: {
        hotspot: true
      },
      initialValue: []
    },
    {
      title: "Цена",
      name: "price",
      type: "number"
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