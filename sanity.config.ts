import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schema';

const config = defineConfig({
  title: 'Studio-Lorenz',

  projectId: 'ltuarcsn',

  dataset: 'production',

  apiVersion: '2023-12-12',

  basePath: '/admin',

  plugins: [deskTool()],

  schema: { types: [project] },
});

export default config;
