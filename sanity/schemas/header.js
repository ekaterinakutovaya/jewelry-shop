export default {
  name: "header",
  title: "Шапка сайта",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Фон шапки",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "backgroundColor",
      title: "Цвет шапки",
      type: "string"
    },
    {
      name: "textColor",
      title: "Цвет текста",
      type: "string"
    },
    {
      name: "borderBottomColor",
      title: "Цвет границы",
      type: "string"
    },
    {
      name: "borderBottomSize",
      title: "Толщина границы (px)",
      type: "string"
    }
  ]
};
