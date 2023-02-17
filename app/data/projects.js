import fs from 'fs/promises';

export async function getStoredProjects() {
  const rawFileContent = await fs.readFile('Projects.json', {
    encoding: 'utf-8',
  });
  const data = JSON.parse(rawFileContent);
  const storeProjects = data.projects ?? [];
  return storeProjects;
}

export function storeProjects(projects) {
  return fs.writeFile(
    'projects.json',
    JSON.stringify({ projects: projects || [] })
  );
}
