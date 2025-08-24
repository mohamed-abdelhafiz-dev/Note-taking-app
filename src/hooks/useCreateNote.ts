import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { Note } from "../types/types";
import type { AxiosError } from "axios";
import axios from "axios";

type CreateNoteData = Omit<Note, "_id" | "createdAt" | "updatedAt">;
const useCreateNote = (): UseMutationResult<
  Note,
  AxiosError,
  CreateNoteData
> => {
  return useMutation<Note, AxiosError, CreateNoteData>({
    mutationFn: async (note): Promise<Note> => {
      const { data } = await axios.post<Note>("/notes", note);
      return data;
    },
  });
};

export default useCreateNote;
