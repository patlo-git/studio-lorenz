import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="mx-10">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl font-extralight">
        {page.title}
      </h1>

      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content}></PortableText>
      </div>
    </div>
  );
}
