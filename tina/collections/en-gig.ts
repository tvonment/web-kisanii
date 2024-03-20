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
            ui: {
                parse: (input) => {
                    let date = new Date(input)
                    date.setHours(2, 0, 0, 0)
                    return date.toISOString()
                }
            },
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
