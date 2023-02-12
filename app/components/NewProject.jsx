import { Form, useNavigation } from '@remix-run/react';
import styles from './projects.css';

function NewProject() {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'sumbitting';

  return (
    <Form method='post' id='project-form'>
      <p>
        <label htmlFor='project-title'>Project Title</label>
        <input type='text' id='project-title' name='project-title' required />
      </p>
      <p>
        <label htmlFor='project-content'>Project-Content</label>
        <textarea id='content' name='content' rows='5' required />
      </p>
      <div className='form-actions'>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Project card.'}
        </button>
      </div>
    </Form>
  );
}
export default NewProject;

export function links() {
  return [{ rel: 'styleSheet', href: styles }];
}
