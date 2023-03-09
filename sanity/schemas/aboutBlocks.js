export default {
  title: "Блоки",
  name: "aboutBlocks",
  type: "object",
  fields: [
      {
          title: "Заголовок блока",
          name: 'blockTitle',
          type: 'string'
      },
      {
          title: "Картинка блока",
          name: 'blockImage',
          type: 'image'
      },
    {
      title: "Параграфы блока",
      name: "paragraph",
      type: "array",
      of: [{ type: "text" }],
      options: {
        hotspot: true
      }
    }

  ]
};
