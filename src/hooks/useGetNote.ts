import {
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type { Note } from "../types/types";

const fetchNote = async (id: string | undefined): Promise<Note> => {
  const { data } = await axios.get<Note>(`/notes/${id}`);
  return data;
};

const useGetNote = (
  id: string | undefined
): UseQueryResult<Note, AxiosError> => {
  const queryClient = useQueryClient();

  return useQuery<Note, AxiosError>({
    queryKey: ["notes", id],
    queryFn: () => fetchNote(id),
    initialData: (queryClient.getQueryData(["notes"]) as Note[])?.find(
      (note: Note) => note._id === id
    ),
  });
};

export default useGetNote;
