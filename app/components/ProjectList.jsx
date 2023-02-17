import { Link } from '@remix-run/react';
import styles from './ProjectList.css';

function ProjectList({ projects }) {
    return (
        <ul id='project-list'>
        {projects.map((project, index) => (
          <li key={project.id} className='project'>
            <Link to={'/' + project.id}>
            <article>
              <header>
                <ul className='project-meta'>
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={project.id}>
                      {new Date(project.id).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </time>
                  </li>
                </ul>
                <h2>{project.title}</h2>
              </header>
              <p>{project.content}</p>
            </article>
            </Link>
          </li>
        ))}
      </ul>
    )
}

export default ProjectList;

export function links() {
return [{ rel: 'stylesheet', href: styles}]
}