const explorer = {
  title: "root",
  isFolder: true,
  items: [
    {
      id: 1,
      title: "public",
      isFolder: true,
      items: [
        {
          id: 1,
          title: "favicon.ico",
          isFolder: false,
        },
        {
          id: 2,
          title: "index.html",
          isFolder: false,
        },
        {
          id: 3,
          title: "manifest.json",
          isFolder: false,
        },
      ],
    },
    {
      id: 1,
      title: "src",
      isFolder: true,
      items: [
        {
          id: 1,
          title: "components",
          isFolder: true,
          items: [
            {
              id: 1,
              title: "Folder.js",
              isFolder: false,
            },
          ],
        },
        {
          id: 2,
          title: "Data",
          isFolder: true,
          items: [
            {
              id: 1,
              title: "Data.js",
              isFolder: false,
            },
          ],
        },
        {
          id: 3,
          title: "App.js",
          isFolder: false,
        },
        {
          id: 4,
          title: "index.js",
          isFolder: false,
        },
        {
          id: 5,
          title: "logo.svg",
          isFolder: false,
        },
      ],
    },
  ],
};

export { explorer };
