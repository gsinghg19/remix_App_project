import { Link, useLoaderData } from "@remix-run/react";
import { getStoredProjects } from '../data/projects'
import { json } from "@remix-run/node";
import styles from '../styles/project-details.css'


export default function ProjectDetailsPage() {
    const project = useLoaderData();
    return (
        <main id='project-details'>
            <header>
                <nav>
                    <Link to ='/projects'>Back to all projects</Link>
                </nav>
                <h1>{project.title}</h1>
            </header>
            <p id='project-details-content'>{project.content}</p>
        </main>
    )
}

export async function loader({ params }) {
    const projects = await getStoredProjects();
    const projectId = params.projectId;
    const selectedProject = projects.find(project => project.id === projectId);

    if(!selectedProject) {
        throw json(
            {
                message: 'Unable to find the project Id: ' + projectId},
                {
                    status: 404
                })
    }
    return selectedProject;
}

export function links() {
    return [{rel: 'stylesheet', href: styles}]
}

export function meta({data}) {
    return {
        title: data.title,
        description: 'Manage your projects easily!'
    }
}