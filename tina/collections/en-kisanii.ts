import exp from "constants";
import { Collection } from "tinacms";

const ENKisanii: Collection = {
    name: "enkisanii",
    label: "EN Kisanii",
    path: "content/english/",
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
            label: "Title",
            isTitle: true,
            required: true,
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
export default ENKisanii;