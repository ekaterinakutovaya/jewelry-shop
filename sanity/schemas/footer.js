export default {
  name: "footer",
  title: "Подвал сайта",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Фон подвала",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "backgroundColor",
      title: "Цвет подвала",
      type: "string"
    },
    {
      name: "textColor",
      title: "Цвет текста",
      type: "string"
    },
    {
      name: "borderTopColor",
      title: "Цвет границы",
      type: "string"
    },
    {
      name: "borderTopSize",
      title: "Толщина границы (px)",
      type: "string"
    },
    {
      name: "borderColor",
      title: "Цвет разделителя",
      type: "string"
    },
    {
      name: "copyrightColor",
      title: "Цвет CopyRight",
      type: "string"
    }
  ]
};
