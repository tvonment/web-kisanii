import { Collection } from "tinacms";

const ENSinglePage: Collection = {
    name: "ensinglepage",
    label: "EN Single",
    path: "content/english/pages",
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
            label: "Title",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
        },
        {
            type: "image",
            name: "image",
            label: "Image",
            required: false,
        },
        {
            type: "rich-text",
            name: "body",
            label: "Content",
            required: true,
            isBody: true,
        },
    ],
};
export default ENSinglePage;