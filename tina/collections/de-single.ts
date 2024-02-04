import { Collection } from "tinacms";

const DESinglePage: Collection = {
    name: "singlepage",
    label: "DE Single",
    path: "content/german/pages",
    match: {
        include: "single",
    },
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Beschreibung",
            required: false,
        },
        {
            type: "image",
            name: "image",
            label: "Bild",
            required: false,
        },
        {
            type: "rich-text",
            name: "body",
            label: "Inhalt",
            required: true,
            isBody: true,
        },
    ],
};
export default DESinglePage;