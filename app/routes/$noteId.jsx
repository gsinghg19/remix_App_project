import { Link } from "@remix-run/react";

export default function NoteDetailsPage() {
    return (
        <main id='note-details'>
            <header>
                <nav>
                <Link to='/notes'>Back to all the notes</Link>
            </nav>
            <h1>Dynamic Note title here</h1>
            </header>
            <p id='note-details-content'>Note content dynamic</p>
        </main>
    )
}