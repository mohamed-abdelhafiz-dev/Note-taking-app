import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const useDeleteNote = (): UseMutationResult<
  { message: string },
  AxiosError,
  string | undefined
> => {
  return useMutation<{ message: string }, AxiosError, string | undefined>({
    mutationFn: async (
      noteId: string | undefined
    ): Promise<{ message: string }> => {
      const res = await axios.delete<{ message: string }>(`/notes/${noteId}`);
      return res.data;
    },
  });
};

export default useDeleteNote;
