import { CoverImage, Author } from 'interfaces/blogProps';

export interface Book {
    fields: {
        title: string;
        author: Author;
        coverImage: CoverImage;
        slug: string;
        date: string;
    };
}
