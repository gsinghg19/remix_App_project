import { Link } from '@remix-run/react';
import homeStyles from '../styles/home.css';

export default function Index() {
  return (
    <main id='content'>
      <h1>A better way of keeping track of your projects.</h1>
      <p>Never lose focus again!</p>
    </main>
  );
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
  return [{ rel: 'stylesheet', href: homeStyles }];
}
