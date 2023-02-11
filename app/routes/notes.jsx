import { redirect, json } from '@remix-run/node';
import NewNote, { links as newNoteLinks } from '../components/NewNote';
import { getStoredNotes, storeNotes } from '../data/notes';
import NoteList, { links as noteListLink } from '../components/NoteList';
import { useLoaderData } from 'react-router';

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
  return json(notes);
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 500));
  return redirect('/notes');
}

export function links() {
  return [...newNoteLinks(), ...noteListLink()];
}
