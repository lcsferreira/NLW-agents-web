import type { GetRoomsAPIResponse } from "./types/getRoomsResponse";
import { useQuery } from "@tanstack/react-query";

export const useRooms = () => {
  return useQuery<GetRoomsAPIResponse>({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });
};
