export default {
  title: "Фото",
  name: "photo",
  type: "object",
  fields: [
    {
      title: "Фото изделия",
      name: "itemImage",
      type: "image"
    },
    {
      title: "Фото-мини",
      name: "imagePlaceholder",
      type: "image"
    },
    {
      title: "Alt",
      name: "alt",
      type: "string"
    },
  ],
  preview: {
    select: {
      media: "itemImage"
    }
  }
};
