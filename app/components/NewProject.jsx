import { Form, useActionData, useNavigation } from '@remix-run/react';
import styles from './NewProject.css';

function NewProject() {
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmitting = navigation.state === 'sumbitting';

  return (
    <Form method='post' id='project-form'>
      {data?.message && <p>{data.message}</p>}
      <p>
        <label htmlFor='project-title'>Project Title</label>
        <input type='text' id='project-title' name='project-title' required />
      </p>
      <p>
        <label htmlFor='project-content'>Project-Content</label>
        <textarea id='content' name='content' rows='10' required />
      </p>
      <div className='form-actions'>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add your Project.'}
        </button>
      </div>
    </Form>
  );
}
export default NewProject;

export function links() {
  return [{ rel: 'styleSheet', href: styles }];
}
