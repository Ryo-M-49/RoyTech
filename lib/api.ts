/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { client } from 'lib/contentful';

export const getAllPosts = async () => {
    const entries = await client.getEntries({
        content_type: 'post',
        order: '-fields.date',
    });

    if (entries.items) {
        return entries.items;
    }

    console.log('Error getting Entries.');
};

export const getPostBySlug = async (slug: string) => {
    const entries = await client.getEntries({
        content_type: 'post',
        'fields.slug': slug,
        limit: 1,
    });

    if (entries.items) {
        return entries.items[0];
    }

    console.log('Error getting the entry.');
};

export const getLimitedPosts = async (limit: number) => {
    const entries = await client.getEntries({
        content_type: 'post',
        limit: limit,
        order: '-fields.date',
    });

    if (entries.items) {
        return entries.items;
    }

    console.log('Error getting Entries.');
};
