import type { AxiosError } from "axios";
import type { Note } from "../types/types";
import { Loader2 } from "lucide-react";
import NoteCard from "./NoteCard";
import NotesNotFound from "./NotesNotFound";

interface NotesProps {
  notes: Note[] | undefined;
  error: AxiosError | null;
  isLoading: boolean;
}

const Notes = ({ notes, error, isLoading }: NotesProps) => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-6 relative flex-1 w-full">
      {error && (
        <div className="text-center text-primary py-20 font-bold">
          Error: {error.message}
        </div>
      )}
      {isLoading && (
        <div className="text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <Loader2 className="animate-spin size-10" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes?.length === 0 ? (
          <NotesNotFound />
        ) : (
          notes?.map((note) => <NoteCard key={note._id} note={note} />)
        )}
      </div>
    </div>
  );
};

export default Notes;
