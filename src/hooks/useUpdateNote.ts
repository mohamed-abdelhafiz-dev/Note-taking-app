import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { Note, NoteForm } from "../types/types";
import axios, { AxiosError } from "axios";

interface UpdateNoteData {
  id: string | undefined;
  note: NoteForm;
}

const updateNote = async ({ id, note }: UpdateNoteData) => {
  const { data } = await axios.put<Note>(`/notes/${id}`, note);
  return data;
};

const useUpdateNote = (): UseMutationResult<
  Note,
  AxiosError,
  UpdateNoteData
> => {
  return useMutation<Note, AxiosError, UpdateNoteData>({
    mutationFn: updateNote,
  });
};

export default useUpdateNote;
