import { client } from 'lib/contentful';

export async function getAllPosts() {
  const entries = await client.getEntries({
      content_type: "post",
      order: "-fields.date",
  });

  if (entries.items) {
      return entries.items
  }

  console.log('Error getting Entries.');
}

export async function getPostBySlug(slug: string) {
    const entries = await client.getEntries({
        content_type: "post",
        'fields.slug': slug,
        limit: 1
    });
  
    if (entries.items) {
        return entries.items[0]
    }

    console.log('Error getting the entry.');
}