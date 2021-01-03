interface Author {
    fields: {
        image: {
            fields: string;
            title?: string;
        };
        name: string;
    };
}

// export interface Contents {
//     content: {
//         content: {
//             nodeType: string;
//             value: string;
//             data: { [s: string]: string };
//             marks: { type: string }[];
//         }[];
//         nodeType: string;
//         data: { [s: string]: string };
//     }[];
// }

interface CoverImage {
    fields: {
        file: string;
        title: string;
    };
}

export interface Post {
    fields: {
        author: Author;
        coverImage: CoverImage;
        date: Date;
        content: string;
        slug: string;
        title: string;
    };
}

export interface Props {
    posts: Post[];
}
