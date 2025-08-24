import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type { Note } from "../types/types";

const fetchNotes = async (): Promise<Note[]> => {
  const { data } = await axios.get<Note[]>("/notes");
  return data;
};

const useGetNotes = (): UseQueryResult<Note[], AxiosError> =>
  useQuery<Note[], AxiosError>({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

export default useGetNotes;
