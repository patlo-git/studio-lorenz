import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto p-20">
      <h1 className="text-7xl font-extrabold">
        Hey Y&apos;all!, I&apos;m{' '}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Patrick Lorenz
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">Check out my projects</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
        {projects.map(project => (
          <div key={project._id} className="border-2 border-gray-500 rounded-sm p-2">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-sm border border-gray-500"
              />
            )}
            <div className="m-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
