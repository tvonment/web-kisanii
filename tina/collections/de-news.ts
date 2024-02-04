import { Collection } from "tinacms";
const DENews: Collection = {
    name: "denews",
    label: "DE Aktuelles",
    path: "content/german/news",
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
            label: "Priorität (1 = höchste)",
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Kurzbeschreibung",
            required: false,
        },
        {
            type: "image",
            name: "image",
            label: "Bild",
            required: true
        },
        {
            type: "string",
            name: "body",
            label: "Langer Text",
            isBody: true,
            required: true,
        }
    ],
};
export default DENews;
