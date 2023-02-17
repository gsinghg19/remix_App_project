import { Link } from '@remix-run/react';
import homeStyles from '../styles/home.css';

export default function Index() {
  return (
    <main id='content'>
      <h1>A better way of keeping track of your important notes</h1>
      <p id='cta'>
      <p>
        This is a simple note taking app that allows you to keep track of
        your important notes. It is a simple app that allows you to create, edit
        and delete notes. 
      </p>
      <p id='cta'>
      <p>Try my early beta and never lose track of your notes again!</p>
      <p id='cta'>
        <Link to='/notes'>Try Now!</Link>
        </p>
        </p>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
