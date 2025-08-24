import { Link } from "react-router";
import type { Note } from "../types/types";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import formatDate from "../utils/date";
import useDeleteNote from "../hooks/useDeleteNote";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import confirm from "../utils/confirmationAlert";

const NoteCard = ({ note }: { note: Note }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteNote } = useDeleteNote();
  const handleDeleteNote = (e: React.MouseEvent) => {
    e.preventDefault();
    confirm("Are you sure you want to delete this note?", () => {
      deleteNote(note._id, {
        onSuccess() {
          toast.success("Note deleted successfully");
          queryClient.setQueryData(["notes"], (prev: Note[] | undefined) =>
            prev?.filter((n) => n._id !== note._id)
          );
        },
        onError() {
          toast.error("Note deletion failed");
        },
      });
    });
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card w-full bg-base-200 hover:shadow-lg transition-all duration-200 border-solid border-t-4 border-primary/75"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(note.createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <button className="btn btn-xs btn-ghost text-base-content/70">
              <PenSquareIcon className="size-4" />
            </button>
            <button
              className="btn btn-xs btn-ghost text-error"
              onClick={handleDeleteNote}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
