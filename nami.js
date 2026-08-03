// schema for resume
const schema = [
  {
    id: "identity",
    title: "Identity",
    fields: [
      {
        key: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "Ada Lovelace",
      },
      {
        key: "role",
        label: "Professional title",
        type: "text",
        placeholder: "Computing Pioneer",
      },
      {
        key: "summary",
        label: "Summary",
        type: "textarea",
        placeholder: "2-3 sentence professional snapshot",
        rows: 3,
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    fields: [
      {
        key: "email",
        label: "Email",
        type: "email",
        placeholder: "ada@example.com",
      },
      { key: "phone", label: "Phone", type: "tel", placeholder: "+1 555 0100" },
      {
        key: "location",
        label: "Location",
        type: "text",
        placeholder: "London, UK",
      },
      {
        key: "website",
        label: "Portfolio / Website",
        type: "url",
        placeholder: "https://",
      },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    fields: [
      {
        key: "skills",
        label: "Key skills (comma separated)",
        type: "text",
        placeholder: "Systems design, Data viz, Leadership",
      },
    ],
  },
  {
    