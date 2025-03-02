export default {
  title: "Блоки",
  name: "aboutBlocks",
  type: "object",
  fields: [
      {
          title: "Заголовок блока",
          name: 'blockTitle_ru',
          type: 'string'
      },
      {
          title: "Заголовок блока En",
          name: 'blockTitle_en',
          type: 'string'
      },
      {
          title: "Картинка блока",
          name: 'blockImage',
          type: 'image'
      },
    {
      title: "Параграфы блока",
      name: "paragraph_ru",
      type: "array",
      of: [{ type: "text" }],
      options: {
        hotspot: true
      }
    },
    {
      title: "Параграфы блока",
      name: "paragraph_en",
      type: "array",
      of: [{ type: "text" }],
      options: {
        hotspot: true
      }
    }

  ]
};
