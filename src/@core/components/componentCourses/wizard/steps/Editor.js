export const fields = {
  blocks: [
    {
      type: "paragraph",
      data: {
        text: "dafasasd",
      },
    },
    {
      type: "checklist",
      data: {
        items: [
          {
            text: "asdadasdsad",
            checked: false,
          },
          {
            text: "asdsadsadadsadasdasd",
            checked: false,
          },
          {
            text: "aaaa",
            checked: true,
          },
        ],
      },
    },
    {
      type: "delimiter",
      data: {},
    },
    {
      type: "info",
      data: {
        title: "infooooo",
        message: "info message",
      },
    },
    {
      type: "warning",
      data: {
        title: "warnnnnnnnnn",
        message: "warn message",
      },
    },
    {
      type: "header",
      data: {
        text: "Heaaddddd",
        level: 1,
      },
    },
    {
      type: "quote",
      data: {
        text: "quotttttttttt",
        caption: "bla bla",
        alignment: "left",
      },
    },
    {
      type: "image",
      data: {
        file: {
          url: "assets/codex2x.png",
        },
        caption: "CodeX Code Camp 2019",
      },
    },
    {
      type: "list",
      data: {
        style: "ordered", // unordered
        items: [
          {
            content: "asdsad",
            items: [],
          },
          {
            content: "asdsadasdasd",
            items: [],
          },
        ],
      },
    },
    {
      type: "headlines",
      data: {
        items: [
          {
            content: {
              link: "https://google.com",
              title: "getting start",
            },
            items: [],
          },
          {
            content: {
              link: "https://google.com",
              title: "getting start",
            },
            items: [],
          },
        ],
      },
    },
  ],
};
