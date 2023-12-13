import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const client = createClient({
    projectId: 'ltuarcsn',

    dataset: 'production',

    apiVersion: '2023-12-12',
  });

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}
