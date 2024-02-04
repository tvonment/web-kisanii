import { Collection } from "tinacms";
const ENNews: Collection = {
    name: "ennews",
    label: "EN Aktuelles",
    path: "content/english/news",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true,
        },
        {
            type: "number",
            name: "priority",
            label: "Priority (1 = highest)",
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "short description",
            required: false,
        },
        {
            type: "image",
            name: "image",
            label: "Image",
            required: true
        },
        {
            type: "string",
            name: "body",
            label: "Content",
            isBody: true,
            required: true,
        }
    ],
};
export default ENNews;
