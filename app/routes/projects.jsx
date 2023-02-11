import homeStyles from '../styles/home.css';

export default function Index() {
  return (
    <main id='content'>
      <h1>A better way of keeping track of your projects.</h1>
      <p>Never lose focus again!</p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
