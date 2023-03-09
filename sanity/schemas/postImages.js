export default {
  title: "Картинки",
  name: "postImages",
  type: "object",
  fields: [
    {
      title: "Картинка",
      name: 'image',
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Сжатая картинка",
      name: 'imageMin',
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Описание картинки",
      name: "caption",
      type: "string",
      options: {
        hotspot: true
      }
    }

  ]
};
