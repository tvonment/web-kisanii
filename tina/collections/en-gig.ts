import { Collection } from "tinacms";
const ENGig: Collection = {
    name: "engig",
    label: "EN Gig",
    path: "content/english/gigs",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
        },
        {
            type: "datetime",
            name: "the_date",
            label: "Date",
            required: true,
        },
        {
            type: "string",
            name: "time",
            label: "Time",
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
        },
        {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
        }
    ],
};
export default ENGig;
