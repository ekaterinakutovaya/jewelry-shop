export default {
    title: "Параграфы",
    name: "aboutParagraph",
    type: "object",
    fields: [
        {
            title: "Text",
            name: "text",
            type: "array",
            of: [{ type: "string" }],
            options: {
                hotspot: true
            }
        }
    ]
};