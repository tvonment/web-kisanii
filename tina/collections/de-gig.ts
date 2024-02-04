import { Collection } from "tinacms";
const DEGig: Collection = {
    name: "degig",
    label: "DE Gig",
    path: "content/german/gigs",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true,
        },
        {
            type: "datetime",
            name: "the_date",
            label: "Datum",
            required: true,
        },
        {
            type: "string",
            name: "time",
            label: "Zeit",
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Beschreibung",
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
export default DEGig;
