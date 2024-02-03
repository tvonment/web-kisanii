import { Collection } from "tinacms";

const DEKisanii: Collection = {
    name: "dekisanii",
    label: "DE Kisanii",
    path: "content/german/",
    match: {
        include: "kisanii",
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
            type: "rich-text",
            name: "body",
            label: "Beschreibung",
            required: true,
            isBody: true,
        },
    ],
};
export default DEKisanii;