interface Author {
    fields: {
        image: {
            fields: string;
            title?: string;
        };
        name: string;
    };
}

export interface Contents {
    content: [
        {
            content: [
                {
                    nodeType: string;
                    value: string;
                }
            ];
            nodeType: string;
        }
    ];
    data: Record<string, unknown>;
    nodeType: string;
}

interface CoverImage {
    fields: {
        file: string;
        title: string;
    };
}

export interface Post {
    fields: {
        author: Author;
        content: Contents;
        coverImage: CoverImage;
        date: Date;
        slug: string;
        title: string;
    };
}

export interface Props {
    posts: Post[];
}
