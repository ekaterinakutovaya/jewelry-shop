export default {
  title: "Блоки",
  name: "postBlocks",
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
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Сжатая картинка",
      name: 'blockImageMin',
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Описание",
      name: 'caption_ru',
      type: 'string'
    },
    {
      title: "Описание En",
      name: 'caption_en',
      type: 'string'
    },
    {
      title: "Карусель",
      name: "carousel",
      type: "array",
      of: [
        {
          title: "Карусель",
          type: "postImages"
        }
      ]
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
      title: "Параграфы блока En",
      name: "paragraph_en",
      type: "array",
      of: [{ type: "text" }],
      options: {
        hotspot: true
      }
    }

  ]
};
