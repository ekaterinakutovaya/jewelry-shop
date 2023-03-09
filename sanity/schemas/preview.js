export default {
  name: "preview",
  title: "Случайные превью",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true
      }
    },
    {
      name: "tag",
      title: "Тег изделия",
      type: "string"
    }
  ]
};
