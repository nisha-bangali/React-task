
export const data = {
    name: "root",
    isFolder: true,
    children: [
        {
            name: 'src',
            isFolder: true,
            children: [
                {
                    name: "App.js",
                    isFolder: false,
                },
                {
                    name: "Folder.js",
                    isFolder: false,
                },
                {
                    name: "data.js",
                    isFolder: false,
                },
                {
                    name: "Index.js",
                    isFolder: false,
                },
                {
                    name: "style.css",
                    isFolder: false,
                },
            ]
        },
        {
            name : 'public',
            isFolder: true,
            children:[
                {
                 name: 'index.html',
                isFolder: false,
                },
                {
                 name: 'style.css',
                isFolder: false,
                },

            ]
        },
        {
            name : 'package.json',
            isFolder:false
        }

    ]
}
