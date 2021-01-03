interface Author {
    fields: {
        image: {
            fields: string;
            title?: string;
        };
        name: string;
    };
}

interface CoverImage {
    fields: {
        file: {
            contentType: string;
            details: {
                image: {
                    width: number;
                    height: number;
                };
                size: number;
            };
            fileName: string;
            url: string;
        };
        title: string;
    };
}

export interface Post {
    fields: {
        author: Author;
        coverImage: CoverImage;
        description: string;
        date: string;
        markdown: string;
        slug: string;
        title: string;
    };
}
