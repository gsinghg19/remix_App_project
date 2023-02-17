import { Link, useCatch } from '@remix-run/react';
import { useLoaderData } from 'react-router';
import { getStoredProjects, storeProjects } from '../data/projects';
import NewProject, { links as newProjectLinks } from '../components/NewProject';
import ProjectList, { links as projectListLinks } from '../components/ProjectList';
import { json, redirect } from '@remix-run/node';


export default function ProjectsPage() {
  const projects = useLoaderData();
  return (
    <main>
      <NewProject />
      <ProjectList projects={projects} />
    </main>
  )
}

export async function loader() {
  const projects = await getStoredProjects();
  if(!projects || projects.length === 0) {
    throw json(
    {
      message: 'oh no!! No projects have been found!'},
    {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return json(projects);
}

export async function action({ request }) {
  const formData = await request.formData();
  const projectData = Object.fromEntries(formData);

  //******TODO: This error component is not working. Need to fix.*****
  // if(projectData.title.trim().length < 5){
  //   return {message: 'Error. Title must contain 5 or more characters.'}
  //}

  const existingProjects = await getStoredProjects();
  projectData.id = new Date().toISOString();
  const updatedProjects = existingProjects.concat(projectData);
  await storeProjects(updatedProjects);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 500));
  return redirect('/projects');
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  const message = caughtResponse.data?.message || 'Data not found'

  return (
    <main>
      <NewProject />
      <p className='error'>{message}</p>
    </main>
  )
}

export function ErrorBoundary({error}) {
  return (
    <main className='error'>
    <h1>Oh no! Looks like you've jumped the gun. Our Projects page is still being developed.</h1>
    <p>{error.message}</p>
    <p><Link to='/'>Click here to return to the homepage</Link></p>
  </main>
  )
}

export function links() {
  return [...newProjectLinks(), ...projectListLinks()];
}

export function meta() {
  return {
    title: 'All Projects',
    description: 'Manage your projects in one place.'
  }
}

