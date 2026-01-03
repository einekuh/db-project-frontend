import { createListCollection } from "@chakra-ui/react";

const conditionObjects = createListCollection({
  items: [
    { label: "New", value: "new" },
    { label: "Like new", value: "like-new" },
    { label: "Used", value: "used" },
    { label: "Needs repair", value: "needs-repair" },
    { label: "Accident damaged", value: "accident-damaged" },
  ],
});

export const conditions = [
  "New",
  "Like new",
  "Used",
  "Needs repair",
  "Accident damaged",
];
export default conditionObjects;
