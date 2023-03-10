import { redirect, json } from '@remix-run/node';
import NewNote, { links as newNoteLinks } from '../components/NewNote';
import { getStoredNotes, storeNotes } from '../data/notes';
import NoteList, { links as noteListLink } from '../components/NoteList';
import { useLoaderData } from 'react-router';
import { Link, useCatch } from '@remix-run/react';

export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  if(!notes || notes.length === 0) {
    throw json(
    {
      message: 'oh no!! No notes have been found!'},
    {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return json(notes);
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  if(noteData.title.trim().length < 5){
    return {message: 'Error. Title must contain 5 or more characters.'}
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 500));
  return redirect('/notes');
}

export function CatchBoundary() {
 const caughtResponse = useCatch();

 const message = caughtResponse.data?.message || 'Data not found'
  
  return( 
  <main>
    <NewNote />
    <p className='error'>{message}</p>
  </main>
  )
}

export function ErrorBoundary({error}) {
  return (
    <main className='error'>
    <h1>Oh no! Looks like their is something wrong with your notes! :(</h1>
    <p>{error.message}</p>
    <p><Link to='/'>Click here to return to the homepage</Link></p>
  </main>
  )
}

export function links() {
  return [...newNoteLinks(), ...noteListLink()];
}

export function meta() {
  return {
    title: 'All Notes',
    description: 'Manage you notes easily!'
  }
}
