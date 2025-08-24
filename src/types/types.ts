interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NoteForm {
  title: string;
  content: string;
}

export type { Note, NoteForm };
